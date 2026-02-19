# Netflix Clone - Complete Setup & Installation Guide

## 📋 Project Overview

A full-stack Netflix-style streaming application with user authentication, movie browsing, search, and watchlist features.

**Tech Stack:**
- Frontend: React 18, Tailwind CSS, React Router
- Backend: Node.js, Express, MongoDB
- Auth: JWT (JSON Web Tokens)
- Data: TMDB API for movies

---

## 🚀 Quick Start (10 minutes)

### Step 1: Prerequisites
Install these first:
- **Node.js** (v14+): https://nodejs.org/
- **MongoDB** (Local): https://docs.mongodb.com/manual/installation/
  - OR use **MongoDB Atlas** (Cloud): https://www.mongodb.com/cloud/atlas
- **TMDB API Key** (Free): https://www.themoviedb.org/settings/api

### Step 2: Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your values
```

**Update `.env` with:**
```env
MONGODB_URI=mongodb://localhost:27017/netflix-clone
JWT_SECRET=your_very_secret_key_12345
JWT_EXPIRE=7d
TMDB_API_KEY=your_tmdb_api_key_here
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

**Start Backend:**
```bash
npm run dev
# Backend runs on http://localhost:5000
```

### Step 3: Frontend Setup
```bash
# In new terminal, navigate to frontend
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm start
# Frontend opens at http://localhost:3000
```

### Step 4: Test Application
1. Go to http://localhost:3000
2. Click "Sign Up" and create an account
3. Login with your credentials
4. Browse movies, search, and add to watchlist

---

## 📁 Complete Folder Structure

```
netflix-clone/
│
├── backend/
│   ├── models/
│   │   └── User.js              # MongoDB user schema
│   ├── controllers/
│   │   ├── authController.js    # Login/Signup logic
│   │   ├── movieController.js   # TMDB API calls
│   │   └── userController.js    # User profile & watchlist
│   ├── routes/
│   │   ├── auth.js              # /api/auth routes
│   │   ├── movies.js            # /api/movies routes
│   │   └── users.js             # /api/users routes
│   ├── middleware/
│   │   └── auth.js              # JWT verification
│   ├── server.js                # Express app & setup
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.js         # Login page
│   │   │   ├── Signup.js        # Sign up page
│   │   │   ├── Dashboard.js     # Home page with movies
│   │   │   ├── MovieDetail.js   # Movie details & cast
│   │   │   └── Search.js        # Search results
│   │   ├── components/
│   │   │   ├── Navbar.js        # Top navigation
│   │   │   ├── HeroBanner.js    # Featured movie banner
│   │   │   ├── MovieRow.js      # Scrollable movie row
│   │   │   ├── MovieCard.js     # Individual movie card
│   │   │   └── SearchBar.js     # Search input
│   │   ├── context/
│   │   │   └── AuthContext.js   # Auth state management
│   │   ├── services/
│   │   │   └── api.js           # API calls with axios
│   │   ├── utils/
│   │   │   └── PrivateRoute.js  # Protected routes
│   │   ├── App.js               # Main app component
│   │   ├── index.js             # React entry point
│   │   └── index.css            # Global styles
│   ├── public/
│   │   └── index.html           # HTML template
│   ├── package.json
│   ├── tailwind.config.js       # Tailwind configuration
│   ├── postcss.config.js        # PostCSS configuration
│   ├── .env.example
│   └── .gitignore
│
├── README.md                    # Full documentation
├── QUICK_START.md               # Quick start guide
├── SETUP.md                     # This file
└── .gitignore

```

---

## 🔑 Environment Variables

### Backend (.env)

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/netflix-clone
# OR for Atlas: mongodb+srv://username:password@cluster.mongodb.net/netflix-clone

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_secret_key_keep_it_safe
JWT_EXPIRE=7d

# TMDB API
TMDB_API_KEY=your_tmdb_api_key_from_settings

# Server
PORT=5000
NODE_ENV=development

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)

```env
REACT_APP_API_URL=http://localhost:5000/api
```

---

## 🗄️ Database Setup

### Option A: Local MongoDB

**Windows:**
```bash
# Install MongoDB Community Edition from https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
# Start MongoDB:
net start MongoDB
# Or in PowerShell:
Start-Service MongoDB
```

**Mac (with Homebrew):**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
sudo apt-get install mongodb
sudo systemctl start mongod
```

### Option B: MongoDB Atlas (Cloud - Recommended)

1. Visit https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a cluster
4. Get connection string like:
   ```
   mongodb+srv://username:password@cluster0.mongodb.net/netflix-clone
   ```
5. Add to backend `.env` as `MONGODB_URI`
6. Add your IP to network access

---

## 🎬 Getting TMDB API Key

1. Visit https://www.themoviedb.org/
2. Sign up and verify email
3. Go to Settings → API
4. Create an API Key (v3 auth)
5. Copy and paste into backend `.env` as `TMDB_API_KEY`

---

## 📦 Dependencies Explained

### Backend
```json
{
  "express": "Web framework",
  "mongoose": "MongoDB ORM",
  "bcryptjs": "Password hashing",
  "jsonwebtoken": "JWT authentication",
  "axios": "HTTP requests to TMDB API",
  "cors": "Cross-origin requests",
  "dotenv": "Environment variables"
}
```

### Frontend
```json
{
  "react": "UI library",
  "react-dom": "React DOM rendering",
  "react-router-dom": "Routing",
  "axios": "HTTP requests",
  "react-icons": "Icon library",
  "tailwindcss": "Utility-first CSS",
  "react-scripts": "Build tools"
}
```

---

## 🌐 API Endpoints

### Authentication
```
POST   /api/auth/register    - Create account
POST   /api/auth/login       - Login user
GET    /api/auth/me          - Get current user (auth required)
```

### Movies
```
GET    /api/movies/trending   - Trending movies
GET    /api/movies/popular    - Popular movies
GET    /api/movies/top-rated  - Top rated movies
GET    /api/movies/search     - Search (query param: ?query=...)
GET    /api/movies/:movieId   - Movie details with cast
```

### User
```
GET    /api/users/profile                 - Get profile (auth required)
PUT    /api/users/profile                 - Update profile (auth required)
GET    /api/users/watchlist               - Get watchlist (auth required)
POST   /api/users/watchlist/add           - Add to watchlist (auth required)
POST   /api/users/watchlist/remove        - Remove from watchlist (auth required)
```

---

## 🧪 Testing the Application

### Create Test Account
1. Click "Sign Up"
2. Fill in:
   - First Name: Test
   - Last Name: User
   - Email: test@example.com
   - Password: password123
3. Click "Sign Up"
4. You'll be logged in automatically

### Test Features
- ✅ **Browse Movies**: Dashboard shows trending, popular, top-rated
- ✅ **Hero Banner**: Featured movie at top with play button
- ✅ **Scroll Rows**: Click arrows to scroll through movie rows
- ✅ **Search**: Use search bar to find movies
- ✅ **Movie Details**: Click any movie to see full details
- ✅ **Watchlist**: Add/remove movies from watchlist
- ✅ **Logout**: Click profile area and logout
- ✅ **Responsive**: Resize browser to test mobile view

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| **MongoDB connection refused** | Ensure MongoDB is running (`mongod` or via service) |
| **TMDB API 401 (Unauthorized)** | Verify API key in `.env` is correct and active |
| **Port 5000/3000 already in use** | Kill the process or use different port in `.env` |
| **CORS error** | Check `FRONTEND_URL` in backend `.env` matches frontend URL |
| **Login fails with 401** | Check email/password credentials are correct |
| **Movies not loading** | Check TMDB API key is valid and has remaining requests |
| **Cannot find module** | Run `npm install` in that directory |
| **Frontend blank screen** | Check browser console for errors (F12) |

---

## 📝 Key Code Examples

### User Registration
```javascript
// frontend/src/pages/Signup.js
const response = await authAPI.register({
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  password: "secure123"
});
login(response.data.user, response.data.token);
```

### Search Movies
```javascript
// frontend/src/pages/Search.js
const results = await movieAPI.search("inception");
setMovies(results.data);
```

### Add to Watchlist
```javascript
// frontend/src/pages/MovieDetail.js
await userAPI.addToWatchlist({
  movieId: 550,
  title: "Fight Club",
  poster: "image_url"
});
```

---

## 🎯 Features Included

### Authentication
- ✅ Sign up with validation
- ✅ Secure login with JWT
- ✅ Password hashing with bcryptjs
- ✅ Protected routes
- ✅ Logout functionality

### Movie Features
- ✅ Trending movies carousel
- ✅ Popular movies row
- ✅ Top-rated movies row
- ✅ Movie search functionality
- ✅ Detailed movie pages with cast
- ✅ Movie ratings and reviews

### User Features
- ✅ User profile
- ✅ Watchlist management
- ✅ Responsive design
- ✅ Dark theme (Netflix-style)

### Technical
- ✅ JWT authentication
- ✅ MongoDB persistence
- ✅ TMDB API integration
- ✅ Error handling
- ✅ Responsive UI
- ✅ State management with Context

---

## 🚀 Deployment

### Deploy Backend (Heroku)
```bash
# Create Heroku app
heroku create your-app-name

# Set environment variables
heroku config:set TMDB_API_KEY=your_key
heroku config:set JWT_SECRET=your_secret
heroku config:set MONGODB_URI=your_mongo_uri

# Deploy
git push heroku main
```

### Deploy Frontend (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel
```

Update `REACT_APP_API_URL` to your deployed backend URL.

---

## 📞 Support

### Common Questions

**Q: Can I use different database?**
A: Yes, modify the connection in `server.js`

**Q: How do I get more movies?**
A: TMDB API provides thousands. Use pagination.

**Q: Can I add payment?**
A: Yes, integrate Stripe or PayPal

**Q: How do I add video streaming?**
A: Use services like AWS S3 or Vimeo API

---

## 📚 Learning Resources

- [Express.js Docs](https://expressjs.com/)
- [React Docs](https://react.dev/)
- [MongoDB Docs](https://docs.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TMDB API](https://www.themoviedb.org/settings/api)
- [JWT Guide](https://jwt.io/)

---

## 📄 License

MIT License - Free to use for learning and personal projects.

---

**Happy Coding! 🎬🚀**

For detailed documentation, see **README.md**
For quick reference, see **QUICK_START.md**
