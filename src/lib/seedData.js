import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';
import { COLLECTIONS, createListing, createTeamMember, createUser } from './models';
import bcrypt from 'bcryptjs';

// Sample business listings
const sampleListings = [
  {
    title: 'Established Restaurant Chain',
    description: 'Profitable restaurant franchise with multiple locations and strong brand recognition. Well-established in the local market with loyal customer base and experienced management team.',
    price: 1200000,
    revenue: 2800000,
    cashFlow: 400000,
    location: 'Toronto, ON',
    industry: 'Food & Beverage',
    imageUrl: '',
    featured: true,
    established: 2010,
    status: 'active'
  },
  {
    title: 'Tech Consulting Firm',
    description: 'Growing technology consulting business with recurring clients and strong reputation in enterprise software implementation. Excellent growth potential with existing contracts.',
    price: 750000,
    revenue: 1500000,
    cashFlow: 300000,
    location: 'Ottawa, ON',
    industry: 'Technology',
    imageUrl: '',
    featured: true,
    established: 2015,
    status: 'active'
  },
  {
    title: 'Manufacturing Company',
    description: 'Well-established manufacturing business with modern equipment, loyal customer base, and strong relationships with suppliers. Excellent cash flow and growth opportunities.',
    price: 2200000,
    revenue: 5000000,
    cashFlow: 650000,
    location: 'Mississauga, ON',
    industry: 'Manufacturing',
    imageUrl: '',
    featured: true,
    established: 2005,
    status: 'active'
  },
  {
    title: 'Digital Marketing Agency',
    description: 'Fast-growing digital marketing agency with blue-chip clients, proven track record, and scalable business model. Strong online presence and recurring revenue.',
    price: 450000,
    revenue: 900000,
    cashFlow: 180000,
    location: 'Edmonton, AB',
    industry: 'Marketing',
    imageUrl: '',
    featured: false,
    established: 2018,
    status: 'active'
  },
  {
    title: 'Healthcare Services Provider',
    description: 'Established healthcare services provider with steady revenue stream, experienced staff, and growth potential. Strong referral network and excellent reputation.',
    price: 850000,
    revenue: 1800000,
    cashFlow: 275000,
    location: 'Toronto, ON',
    industry: 'Healthcare',
    imageUrl: '',
    featured: true,
    established: 2012,
    status: 'active'
  },
  {
    title: 'E-commerce Business',
    description: 'Profitable online retail business with established supply chain, growing market share, and strong online presence. Multiple revenue streams and loyal customer base.',
    price: 320000,
    revenue: 1100000,
    cashFlow: 155000,
    location: 'Calgary, AB',
    industry: 'E-commerce',
    imageUrl: '',
    featured: false,
    established: 2019,
    status: 'active'
  },
  {
    title: 'Professional Services Firm',
    description: 'Established accounting and financial services firm with long-term client relationships and recurring revenue. Strong reputation and experienced team.',
    price: 900000,
    revenue: 2200000,
    cashFlow: 350000,
    location: 'Vancouver, BC',
    industry: 'Professional Services',
    imageUrl: '',
    featured: false,
    established: 2008,
    status: 'active'
  },
  {
    title: 'Construction Company',
    description: 'Reputable construction company with commercial and residential projects, skilled workforce, and solid reputation. Strong pipeline of upcoming projects.',
    price: 1800000,
    revenue: 4500000,
    cashFlow: 520000,
    location: 'Toronto, ON',
    industry: 'Construction',
    imageUrl: '',
    featured: false,
    established: 2006,
    status: 'active'
  }
];

// Sample team members
const sampleTeam = [
  {
    name: 'John Anderson',
    role: 'Managing Partner & Senior Business Broker',
    email: 'john.anderson@brillionbusiness.com',
    phone: '(416) 333-7999',
    bio: 'With over 20 years of experience in business brokerage and M&A, John has successfully facilitated over 200 business transactions. He specializes in technology and manufacturing sectors.',
    imageUrl: '',
    linkedin: 'https://linkedin.com/in/johnanderson',
    order: 1
  },
  {
    name: 'Sarah Mitchell',
    role: 'Senior Business Advisor',
    email: 'sarah.mitchell@brillionbusiness.com',
    phone: '(613) 555-0123',
    bio: 'Sarah brings 15 years of corporate finance and business development expertise. She focuses on healthcare and professional services acquisitions.',
    imageUrl: '',
    linkedin: 'https://linkedin.com/in/sarahmitchell',
    order: 2
  },
  {
    name: 'Michael Chen',
    role: 'Business Valuation Specialist',
    email: 'michael.chen@brillionbusiness.com',
    phone: '(780) 555-0456',
    bio: 'CPA and Chartered Business Valuator with expertise in complex business valuations. Michael has valued over 500 businesses across various industries.',
    imageUrl: '',
    linkedin: 'https://linkedin.com/in/michaelchen',
    order: 3
  },
  {
    name: 'Lisa Rodriguez',
    role: 'M&A Transaction Manager',
    email: 'lisa.rodriguez@brillionbusiness.com',
    phone: '(905) 555-0789',
    bio: 'Former investment banker with 12 years of M&A experience. Lisa manages complex transactions and ensures smooth closings for our clients.',
    imageUrl: '',
    linkedin: 'https://linkedin.com/in/lisarodriguez',
    order: 4
  },
  {
    name: 'David Thompson',
    role: 'Business Development Director',
    email: 'david.thompson@brillionbusiness.com',
    phone: '(416) 333-7999',
    bio: 'David leads our business development initiatives and client relationship management. He has a strong background in sales and marketing.',
    imageUrl: '',
    linkedin: 'https://linkedin.com/in/davidthompson',
    order: 5
  },
  {
    name: 'Jennifer Walsh',
    role: 'Operations Manager',
    email: 'jennifer.walsh@brillionbusiness.com',
    phone: '(613) 555-0123',
    bio: 'Jennifer oversees daily operations and ensures our processes run smoothly. She has 10 years of experience in business operations and project management.',
    imageUrl: '',
    linkedin: 'https://linkedin.com/in/jenniferwalsh',
    order: 6
  }
];

// Sample admin users
const sampleUsers = [
  {
    username: 'admin',
    email: 'admin@brillionbusiness.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    username: 'johna',
    email: 'john.anderson@brillionbusiness.com',
    password: 'password123',
    role: 'admin'
  }
];

export async function seedListings() {
  try {
    console.log('Seeding business listings...');
    
    // Check if listings already exist
    const existingListings = await getDocs(collection(db, COLLECTIONS.LISTINGS));
    if (!existingListings.empty) {
      console.log('Listings already exist, skipping seed...');
      return;
    }

    // Add each listing
    for (const listingData of sampleListings) {
      const listing = createListing(listingData);
      await addDoc(collection(db, COLLECTIONS.LISTINGS), listing);
    }

    console.log(`Successfully seeded ${sampleListings.length} business listings`);
  } catch (error) {
    console.error('Error seeding listings:', error);
    throw error;
  }
}

export async function seedTeam() {
  try {
    console.log('Seeding team members...');
    
    // Check if team members already exist
    const existingTeam = await getDocs(collection(db, COLLECTIONS.TEAM));
    if (!existingTeam.empty) {
      console.log('Team members already exist, skipping seed...');
      return;
    }

    // Add each team member
    for (const teamData of sampleTeam) {
      const member = createTeamMember(teamData);
      await addDoc(collection(db, COLLECTIONS.TEAM), member);
    }

    console.log(`Successfully seeded ${sampleTeam.length} team members`);
  } catch (error) {
    console.error('Error seeding team:', error);
    throw error;
  }
}

export async function seedUsers() {
  try {
    console.log('Seeding admin users...');
    
    // Check if users already exist
    const existingUsers = await getDocs(collection(db, COLLECTIONS.USERS));
    if (!existingUsers.empty) {
      console.log('Users already exist, skipping seed...');
      return;
    }

    // Add each user
    for (const userData of sampleUsers) {
      const passwordHash = await bcrypt.hash(userData.password, 10);
      const user = createUser({
        username: userData.username,
        email: userData.email,
        passwordHash,
        role: userData.role
      });
      await addDoc(collection(db, COLLECTIONS.USERS), user);
    }

    console.log(`Successfully seeded ${sampleUsers.length} admin users`);
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

export async function seedAll() {
  try {
    console.log('Starting database seeding...');
    
    await seedUsers();
    await seedListings();
    await seedTeam();
    
    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error during database seeding:', error);
    throw error;
  }
}