# Netflix Clone - Quick Start Guide

## Prerequisites
- Node.js v14+ 
- MongoDB (local or MongoDB Atlas)
- TMDB API Key (free from https://www.themoviedb.org)

## Quick Setup (5 minutes)

### Terminal 1 - Backend:
```bash
cd backend
npm install
# Create .env with your MongoDB URI and TMDB API Key
npm run dev
```

### Terminal 2 - Frontend:
```bash
cd frontend
npm install
npm start
```

### Visit: http://localhost:3000

## Database Setup

### Option A: Local MongoDB
```bash
# Install MongoDB Community Edition
# Start MongoDB
mongod
```

### Option B: MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Add to backend/.env as MONGODB_URI

## Get TMDB API Key
1. Register at https://www.themoviedb.org/settings/api
2. Copy API Key
3. Add to backend/.env as TMDB_API_KEY

## Sample .env for Backend
```
MONGODB_URI=mongodb://localhost:27017/netflix-clone
JWT_SECRET=your_secret_key_change_this
TMDB_API_KEY=your_api_key_here
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

## Features Ready to Use
✅ Sign up and login
✅ Browse trending/popular/top-rated movies
✅ Search movies
✅ View movie details and cast
✅ Add/remove from watchlist
✅ Responsive design
✅ User logout

## Troubleshooting

| Issue | Solution |
|-------|----------|
| MongoDB connection error | Check MONGODB_URI in .env |
| TMDB API 401 error | Verify API key is valid |
| Port 5000/3000 in use | Use different port or kill process |
| CORS error | Check FRONTEND_URL in backend .env |

## Project Structure
```
netflix-clone/
├── backend/          # Express API server
│   ├── models/       # MongoDB schemas
│   ├── controllers/  # Business logic
│   ├── routes/       # API endpoints
│   └── server.js     # Entry point
│
└── frontend/         # React app
    ├── src/
    │   ├── pages/    # Login, Dashboard, MovieDetail
    │   ├── components/ # Reusable UI components
    │   ├── context/   # Auth state management
    │   └── services/  # API calls
    └── public/
```

## Default Routes

### Frontend
- `/login` - Login page
- `/signup` - Sign up page
- `/dashboard` - Home with movie rows
- `/movie/:id` - Movie details page
- `/search?q=...` - Search results

### Backend API
- `POST /api/auth/register` - Register
- `POST /api/auth/login` - Login
- `GET /api/movies/trending` - Trending movies
- `GET /api/movies/popular` - Popular movies
- `GET /api/movies/top-rated` - Top rated movies
- `GET /api/movies/search?query=...` - Search
- `GET /api/movies/:id` - Movie details

## Common Tasks

### Add to Watchlist
```javascript
const response = await userAPI.addToWatchlist({
  movieId: movie.id,
  title: movie.title,
  poster: movie.poster
});
```

### Search Movies
```javascript
const results = await movieAPI.search('inception');
```

### Get Movie Details
```javascript
const details = await movieAPI.getMovieDetails(550);
```

## Next Steps / Enhancements
- [ ] Add payment integration (Stripe)
- [ ] Implement video streaming
- [ ] Add user ratings/reviews
- [ ] Social features (share, follow)
- [ ] Advanced recommendation algorithm
- [ ] Watch history tracking
- [ ] Multiple user profiles

---

**Need help?** Check the README.md for detailed documentation.
