// Firestore collection references and data models

export const COLLECTIONS = {
  LISTINGS: 'listings',
  TEAM: 'team',
  USERS: 'users',
  CONTACTS: 'contacts'
};

// Business Listing Schema
export const createListing = ({
  title,
  description,
  price,
  revenue,
  cashFlow,
  location,
  industry,
  imageUrl = '',
  featured = false,
  status = 'active'
}) => ({
  title,
  description,
  price: Number(price),
  revenue: Number(revenue),
  cashFlow: Number(cashFlow),
  location,
  industry,
  imageUrl,
  featured,
  status,
  createdAt: new Date(),
  updatedAt: new Date()
});

// Team Member Schema
export const createTeamMember = ({
  name,
  role,
  email,
  imageUrl = '',
  bio = '',
  order = 0
}) => ({
  name,
  role,
  email,
  imageUrl,
  bio,
  order,
  createdAt: new Date(),
  updatedAt: new Date()
});

// User Schema (Admin)
export const createUser = ({
  username,
  email,
  passwordHash,
  role = 'admin'
}) => ({
  username,
  email,
  passwordHash,
  role,
  createdAt: new Date(),
  updatedAt: new Date()
});

// Contact Form Schema
export const createContact = ({
  name,
  email,
  phone,
  message,
  type = 'general'
}) => ({
  name,
  email,
  phone,
  message,
  type,
  status: 'new',
  createdAt: new Date()
});