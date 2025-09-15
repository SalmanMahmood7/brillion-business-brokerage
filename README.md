# Aldrin Business - Next.js Full-Stack Website

A complete business brokerage website clone built with Next.js, Firebase, and TailwindCSS.

## 🚀 Features

### Frontend
- **Modern Design** - Professional, responsive design with TailwindCSS
- **Interactive Tools** - Business valuation calculator, EBITDA calculator, Freedom Score
- **Dynamic Content** - Business listings with search and filtering
- **SEO Optimized** - Next.js App Router with metadata optimization

### Backend
- **Firebase Integration** - Firestore database for listings, team, and users
- **Authentication** - JWT-based admin authentication
- **Email System** - Contact form with Nodemailer integration
- **RESTful APIs** - Complete API routes for all functionality

### Pages
1. **Home** - Hero section, services overview, featured listings
2. **Sell** - Valuation calculator, selling process, testimonials
3. **Buy** - Business listings with advanced filtering
4. **Grow** - EBITDA calculator, Freedom Score, growth services
5. **About** - Team member profiles, company history
6. **Contact** - Contact form, office locations, map
7. **Admin** - Dashboard, listing management, authentication

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Database**: Firebase Firestore
- **Styling**: TailwindCSS
- **Authentication**: JWT with bcrypt
- **Email**: Nodemailer
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aldrin-business-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Copy `.env.local` and configure:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # Email Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password

   # JWT Secret
   JWT_SECRET=your_jwt_secret_here_generate_a_long_random_string
   ```

4. **Firebase Setup**
   - Create a Firebase project
   - Enable Firestore Database
   - Get your configuration keys
   - Update `.env.local` with your keys

5. **Run the application**
   ```bash
   npm run dev
   ```

## 🗄️ Database Setup

### Seed Data
The project includes sample data for testing:

1. **Automatic Seeding**
   ```bash
   # In development, visit:
   POST http://localhost:3000/api/seed
   ```

2. **Manual Setup**
   - 8 sample business listings
   - 6 team members
   - 2 admin users (admin/admin123)

### Collections
- `listings` - Business listings
- `team` - Team member profiles  
- `users` - Admin users
- `contacts` - Contact form submissions

## 🔐 Admin Access

1. **Login**: `/admin/login`
2. **Credentials**: 
   - Username: `admin`
   - Password: `admin123`
3. **Dashboard**: `/admin`

## 🧮 Interactive Tools

### Business Valuation Calculator
- Industry-specific multipliers
- Growth factor calculations
- EBITDA-based valuations

### EBITDA Calculator
- Complete financial breakdown
- Margin calculations
- Visual results display

### Freedom Score
- Business independence assessment
- 8-category evaluation
- Actionable recommendations

## 📱 Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions
- Fast loading times

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Manual Deployment
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── admin/             # Admin pages
│   └── [pages]/           # Public pages
├── components/            # React components
├── lib/                   # Utilities and configs
└── models/                # Data models
```

## 🔧 API Endpoints

- `POST /api/contact` - Contact form submission
- `GET /api/listings` - Get business listings
- `POST /api/listings` - Create listing (admin)
- `GET /api/team` - Get team members
- `POST /api/team` - Create team member (admin)
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/verify` - Verify authentication

## 🎨 Customization

### Colors
Main colors defined in TailwindCSS:
- Primary: Blue (blue-600)
- Secondary: Green, Purple
- Text: Gray scale

### Content
Update content in:
- Page components (`/app/[page]/page.js`)
- Seed data (`/lib/seedData.js`)
- Navigation (`/components/Navbar.js`)

## 🔒 Security

- JWT authentication for admin
- bcrypt password hashing
- Environment variable protection
- Input validation on all forms
- CORS protection

## 📧 Email Configuration

Configure SMTP settings for contact form:
1. Use Gmail with App Password
2. Update SMTP environment variables
3. Test with the contact form

## 🧪 Testing

### Development Testing
1. Seed the database: `POST /api/seed`
2. Test all pages and functionality
3. Verify responsive design
4. Test admin authentication

### Production Checklist
- [ ] Environment variables set
- [ ] Firebase configuration
- [ ] Email SMTP working
- [ ] Admin authentication
- [ ] All pages responsive
- [ ] Contact form functional

## 📄 License

This project is for educational purposes. Customize and deploy as needed.

## 🤝 Support

For questions or issues:
1. Check this README
2. Review the code comments
3. Test in development environment
4. Check browser console for errors

---

**Built with Next.js 14 + Firebase + TailwindCSS**