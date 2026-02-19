# Netflix Clone - Installation Checklist & Verification

## ✅ Pre-Installation Checklist

### Software Requirements
- [ ] Node.js v14+ installed (`node --version`)
- [ ] npm v6+ installed (`npm --version`)
- [ ] MongoDB installed (local or Atlas account)
- [ ] Git installed (optional, for version control)
- [ ] Text editor/IDE (VS Code recommended)
- [ ] TMDB API Key obtained

### System Requirements
- [ ] 500MB free disk space
- [ ] Internet connection
- [ ] Ports 3000 and 5000 available (not in use)

---

## 📥 Step-by-Step Installation

### 1. Backend Installation

```bash
# Step 1: Navigate to backend
cd netflix-clone/backend

# Step 2: Install dependencies
npm install
# Wait for completion... (may take 1-2 minutes)

# Step 3: Verify installation
npm list
# Should show: express@4.18.2, mongoose@7.0.0, etc.

# Step 4: Create .env file
cp .env.example .env

# Step 5: Edit .env with your credentials
# Open backend/.env and fill in:
# - MONGODB_URI
# - JWT_SECRET (any random string)
# - TMDB_API_KEY
```

### 2. Frontend Installation

```bash
# Step 1: Navigate to frontend
cd netflix-clone/frontend

# Step 2: Install dependencies
npm install
# Wait for completion... (may take 2-3 minutes)

# Step 3: Verify installation
npm list react react-dom
# Should show: react@18.2.0, react-dom@18.2.0

# Step 4: Create .env file
cp .env.example .env

# Step 5: Verify .env content
cat .env
# Should show: REACT_APP_API_URL=http://localhost:5000/api
```

### 3. Database Setup

**Local MongoDB:**
```bash
# Windows: Services → Start MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# Verify it's running
mongosh
# Type: exit
```

**MongoDB Atlas (Cloud):**
```
1. https://www.mongodb.com/cloud/atlas
2. Create cluster
3. Get connection string
4. Add to backend/.env as MONGODB_URI
```

---

## 🚀 Starting the Application

### Terminal 1 - Backend

```bash
cd netflix-clone/backend
npm run dev

# Expected output:
# > netflix-clone-backend@1.0.0 dev
# > nodemon server.js
# MongoDB connected
# Server running on port 5000
```

### Terminal 2 - Frontend

```bash
cd netflix-clone/frontend
npm start

# Expected output:
# webpack compiled...
# Compiled successfully!
# You can now view netflix-clone-frontend in the browser.
# http://localhost:3000
```

### Browser

Open http://localhost:3000 → Should see Netflix clone!

---

## ✅ Verification Checklist

### Backend Verification
- [ ] Terminal shows "MongoDB connected"
- [ ] Terminal shows "Server running on port 5000"
- [ ] No error messages
- [ ] Can access http://localhost:5000/api/movies/trending

### Frontend Verification
- [ ] Browser opens http://localhost:3000
- [ ] Signup page displays
- [ ] Can fill out signup form
- [ ] No error messages in console (F12)

### Database Verification
```bash
# In MongoDB shell:
use netflix-clone
db.users.find()
# Should return empty array initially
```

### TMDB API Verification
```bash
# Test API key works
curl "https://api.themoviedb.org/3/trending/movie/day?api_key=YOUR_API_KEY"
# Should return JSON with movies
```

---

## 🧪 Testing the Application

### 1. Test Signup
```
1. Go to http://localhost:3000
2. Click "Sign Up"
3. Fill in:
   - First Name: John
   - Last Name: Doe
   - Email: john@example.com
   - Password: test1234
   - Confirm: test1234
4. Click "Sign Up"
5. Should see Dashboard
```

### 2. Test Dashboard
```
✓ Should see "NETFLIX" logo
✓ Should see search bar
✓ Should see user name (John)
✓ Should see hero banner with movie
✓ Should see "Trending Now" row with movies
✓ Should see "Popular" row with movies
✓ Should see "Top Rated" row with movies
✓ Movies should have images and ratings
```

### 3. Test Movie Interactions
```
✓ Hover over movie card → overlay appears
✓ Click "Play" button → (placeholder, opens detail)
✓ Click "Info" button → opens movie detail page
✓ Scroll horizontal rows → arrows appear and work
✓ Movie rating visible in badge
```

### 4. Test Movie Details
```
1. Click any movie
2. Should see:
   ✓ Large backdrop image
   ✓ Movie title
   ✓ Description/overview
   ✓ Rating (stars)
   ✓ Release date
   ✓ Runtime
   ✓ Genres
   ✓ Cast members with photos
   ✓ Play button
   ✓ Add to Watchlist button
```

### 5. Test Search
```
1. Click search bar
2. Type "Inception"
3. Press Enter
4. Should navigate to /search?q=Inception
5. Should show search results in grid
6. Should show "Search Results for 'Inception'"
7. Can click any result to see details
```

### 6. Test Watchlist
```
1. On any movie detail page
2. Click "Add to Watchlist"
3. Button should change to "Added to Watchlist" ✓
4. Check if movie is saved (backend logs)
5. Click "Remove from Watchlist"
6. Button should change back to "Add to Watchlist"
```

### 7. Test Logout
```
1. On any page
2. Click user profile area (top right)
3. Click logout
4. Should redirect to /login
5. Token removed from localStorage
6. Can login again
```

### 8. Test Responsiveness
```
1. Open browser DevTools (F12)
2. Click device toolbar (mobile view)
3. Test different screen sizes:
   ✓ iPhone 12 (390px)
   ✓ iPad (768px)
   ✓ Desktop (1920px)
4. Navigation should stack on mobile
5. Grid should adjust columns
6. Hero banner should be readable
```

---

## 🔍 Console Checks

### Browser Console (F12)
```
✓ No red error messages
✓ Network tab shows 200 responses for API calls
✓ Application tab shows token in localStorage
✓ Console shows no warnings about missing components
```

### Backend Console
```
✓ MongoDB connected message
✓ No error traces
✓ Logs incoming requests (if in dev mode)
✓ Shows "Server running on port 5000"
```

### Database
```bash
# MongoDB commands to verify:
use netflix-clone
db.users.findOne()  # Should find your test user
db.users.count()    # Should show count
```

---

## 🐛 Troubleshooting Verification

### Port 5000 Already in Use
```bash
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -i :5000
kill -9 <PID>
```

### Port 3000 Already in Use
```bash
# Same process as above for port 3000
```

### MongoDB Connection Failed
```bash
# Check MongoDB is running:
# Windows: Services check for MongoDB
# Mac: brew services list
# Linux: sudo systemctl status mongod

# Try connecting:
mongosh
# If error: Start MongoDB first
```

### TMDB API Returns 401
```
1. Check API key in .env
2. Log in to https://www.themoviedb.org/settings/api
3. Verify API key is correct
4. Check if API key is active (should say "Active")
5. Restart backend server
```

### Frontend Cannot Connect to Backend
```
1. Check backend is running: http://localhost:5000/api/movies/trending
2. Check REACT_APP_API_URL in frontend/.env
3. Check FRONTEND_URL in backend/.env
4. Verify no typos
5. Restart both servers
```

### Movies Not Loading
```bash
# Check backend console for errors
# Verify TMDB API key works:
curl "https://api.themoviedb.org/3/trending/movie/day?api_key=YOUR_KEY"

# Check browser Network tab (F12) for API responses
# Should see 200 OK responses
```

---

## 📊 Performance Checks

### Page Load Time
- [ ] Dashboard loads in < 3 seconds
- [ ] Movie details load in < 2 seconds
- [ ] Search results show in < 2 seconds

### Network Requests
- [ ] HeroBanner makes 3 requests (trending, popular, top-rated)
- [ ] Each request returns ~20 movies
- [ ] Images load smoothly

### Browser Performance
- [ ] No memory leaks (DevTools → Memory)
- [ ] Smooth scrolling in movie rows
- [ ] No lag on hover effects

---

## 📁 File Structure Verification

```bash
# Verify all files exist:

backend/
  ✓ server.js
  ✓ package.json
  ✓ models/User.js
  ✓ controllers/authController.js
  ✓ controllers/movieController.js
  ✓ controllers/userController.js
  ✓ routes/auth.js
  ✓ routes/movies.js
  ✓ routes/users.js
  ✓ middleware/auth.js
  ✓ .env
  ✓ .env.example
  ✓ .gitignore

frontend/
  ✓ src/App.js
  ✓ src/index.js
  ✓ src/index.css
  ✓ src/pages/Login.js
  ✓ src/pages/Signup.js
  ✓ src/pages/Dashboard.js
  ✓ src/pages/MovieDetail.js
  ✓ src/pages/Search.js
  ✓ src/components/Navbar.js
  ✓ src/components/HeroBanner.js
  ✓ src/components/MovieRow.js
  ✓ src/components/MovieCard.js
  ✓ src/components/SearchBar.js
  ✓ src/context/AuthContext.js
  ✓ src/services/api.js
  ✓ src/utils/PrivateRoute.js
  ✓ public/index.html
  ✓ package.json
  ✓ tailwind.config.js
  ✓ postcss.config.js
  ✓ .env
  ✓ .env.example
  ✓ .gitignore
```

---

## ✨ Success Indicators

### ✅ You're Done When:
1. [ ] Backend running without errors
2. [ ] Frontend running without errors
3. [ ] Can sign up new user
4. [ ] Can login with credentials
5. [ ] Dashboard shows movies from TMDB
6. [ ] Can search movies
7. [ ] Can view movie details
8. [ ] Can add to/remove from watchlist
9. [ ] Can logout
10. [ ] App works on mobile (responsive)

---

## 📞 Quick Reference

### Important URLs
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- MongoDB: localhost:27017
- TMDB: https://api.themoviedb.org/3

### Important Commands
```bash
# Start backend
cd backend && npm run dev

# Start frontend
cd frontend && npm start

# Install dependencies
npm install

# View logs
npm run dev

# Stop server
Ctrl + C
```

### Important Files
- Backend config: `backend/.env`
- Frontend config: `frontend/.env`
- Backend entry: `backend/server.js`
- Frontend entry: `frontend/src/index.js`

---

## 🎓 Next Steps (After Verification)

1. [ ] **Explore the Code**: Read through the files to understand the structure
2. [ ] **Study JWT**: How authentication tokens work
3. [ ] **Learn Components**: Understand React component patterns used
4. [ ] **API Integration**: See how TMDB API is integrated
5. [ ] **Styling**: Study Tailwind CSS usage
6. [ ] **Database**: Learn MongoDB schema design

---

## 🎉 Congratulations!

You now have a fully functional Netflix-style application! 

**Next: Deploy, customize, and build on top of it!**

---

For detailed documentation:
- See **README.md** for complete feature list
- See **SETUP.md** for detailed setup guide
- See **ARCHITECTURE.md** for system design
- See **QUICK_START.md** for quick reference
