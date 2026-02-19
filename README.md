# Netflix Clone

A full-stack Netflix-style web application built with React, Node.js, Express, MongoDB, and JWT authentication.

## Features

- ✅ User Authentication (Signup/Login with JWT)
- ✅ Netflix-style Dashboard with Hero Banner
- ✅ Horizontal Scrolling Movie Rows
- ✅ Movie Search functionality
- ✅ Movie Details with Cast Information
- ✅ Watchlist Management
- ✅ Responsive Design (Mobile & Desktop)
- ✅ Real Movie Data from TMDB API
- ✅ User Logout

## Project Structure

```
netflix-clone/
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── movieController.js
│   │   └── userController.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── movies.js
│   │   └── users.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.js
    │   │   ├── HeroBanner.js
    │   │   ├── MovieRow.js
    │   │   ├── MovieCard.js
    │   │   └── SearchBar.js
    │   ├── pages/
    │   │   ├── Login.js
    │   │   ├── Signup.js
    │   │   ├── Dashboard.js
    │   │   ├── MovieDetail.js
    │   │   └── Search.js
    │   ├── context/
    │   │   └── AuthContext.js
    │   ├── services/
    │   │   └── api.js
    │   ├── utils/
    │   │   └── PrivateRoute.js
    │   ├── App.js
    │   ├── index.js
    │   └── index.css
    ├── public/
    │   └── index.html
    ├── package.json
    ├── tailwind.config.js
    ├── postcss.config.js
    └── .env.example
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (Local or MongoDB Atlas)
- TMDB API Key (Free from https://www.themoviedb.org/settings/api)

## Setup Instructions

### 1. Backend Setup

Navigate to the backend directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

Update the `.env` file with your credentials:
```
MONGODB_URI=mongodb://localhost:27017/netflix-clone
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
TMDB_API_KEY=your_tmdb_api_key_here
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

**To get TMDB API Key:**
1. Go to https://www.themoviedb.org/
2. Sign up and login
3. Go to Settings → API
4. Copy your API Key

Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### 2. Frontend Setup

Navigate to the frontend directory (in a new terminal):
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Create `.env` file:
```bash
REACT_APP_API_URL=http://localhost:5000/api
```

Start the frontend development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Running the Application

1. **Make sure MongoDB is running:**
   - If using local MongoDB: `mongod`
   - If using MongoDB Atlas: Connection string in .env

2. **Start Backend (Terminal 1):**
   ```bash
   cd backend
   npm run dev
   ```

3. **Start Frontend (Terminal 2):**
   ```bash
   cd frontend
   npm start
   ```

4. **Open in Browser:**
   - Go to `http://localhost:3000`
   - Sign up or login with your credentials
   - Browse and search movies!

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires auth)

### Movies
- `GET /api/movies/trending` - Get trending movies
- `GET /api/movies/popular` - Get popular movies
- `GET /api/movies/top-rated` - Get top-rated movies
- `GET /api/movies/search?query=...` - Search movies
- `GET /api/movies/:movieId` - Get movie details

### User
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/watchlist` - Get watchlist
- `POST /api/users/watchlist/add` - Add to watchlist
- `POST /api/users/watchlist/remove` - Remove from watchlist

## Tech Stack

**Frontend:**
- React 18
- React Router v6
- Tailwind CSS
- Axios
- React Icons

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- Bcryptjs
- CORS

**API:**
- The Movie Database (TMDB) API

## Default Test Account

You can create your own account during signup. Test with:
- Email: test@example.com
- Password: password123

## Features in Detail

### 1. Authentication
- Secure signup with password hashing (bcryptjs)
- JWT token-based authentication
- Protected routes that require login

### 2. Dashboard
- Hero banner with featured movie
- Multiple movie rows (Trending, Popular, Top Rated)
- Responsive grid layout
- Horizontal scrolling with navigation arrows

### 3. Movie Details
- Full movie information including cast
- Movie ratings and release date
- Runtime and budget information
- Watchlist management

### 4. Search
- Real-time movie search
- Search results displayed in responsive grid
- Search from navbar on any page

### 5. Responsive Design
- Mobile-first approach
- Optimized for tablets and desktop
- Touch-friendly interface

## Environment Variables

### Backend (.env)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
TMDB_API_KEY=your_tmdb_api_key
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Deployment

### Deploying Backend
1. Push to GitHub
2. Deploy to Heroku, Railway, or Vercel
3. Update MongoDB URI to use MongoDB Atlas
4. Set environment variables on deployment platform

### Deploying Frontend
1. Build the app: `npm run build`
2. Deploy to Vercel, Netlify, or GitHub Pages
3. Update REACT_APP_API_URL to production backend URL

## Future Enhancements

- Add Netflix recommendations algorithm
- Implement user ratings and reviews
- Add social features (share, follow friends)
- Video streaming integration
- Payment processing (stripe)
- User profiles and multiple profiles per account
- Watch history tracking
- Advanced filtering and sorting

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI in .env
- Verify MongoDB credentials

### TMDB API Error
- Verify API key is valid
- Check API key is active in TMDB settings
- Ensure you're not exceeding API rate limits

### Frontend not connecting to Backend
- Verify backend is running on port 5000
- Check REACT_APP_API_URL in .env
- Check CORS settings in server.js

### Port Already in Use
- Backend: `lsof -i :5000` (Mac/Linux) or use different port
- Frontend: `lsof -i :3000` (Mac/Linux) or use different port

## License

MIT License - Feel free to use this project for learning and personal use.

## Support

For issues and questions, please check the code comments or create an issue in the repository.

---

**Happy Streaming! 🎬**
