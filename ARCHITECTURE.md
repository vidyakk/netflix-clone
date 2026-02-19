# Netflix Clone - Architecture & Component Guide

## 🏗️ Application Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER BROWSER                              │
│                    (http://localhost:3000)                       │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────────────┐
│                     REACT FRONTEND                               │
├─────────────────────────────────────────────────────────────────┤
│ ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐   │
│ │ Pages        │  │ Components   │  │ Context & Services   │   │
│ ├──────────────┤  ├──────────────┤  ├──────────────────────┤   │
│ │ • Login      │  │ • Navbar     │  │ • AuthContext        │   │
│ │ • Signup     │  │ • HeroBanner │  │ • API Service        │   │
│ │ • Dashboard  │  │ • MovieRow   │  │ • Axios Interceptors │   │
│ │ • MovieDetail│  │ • MovieCard  │  │ • Private Routes     │   │
│ │ • Search     │  │ • SearchBar  │  │                      │   │
│ └──────────────┘  └──────────────┘  └──────────────────────┘   │
│              ↓                                                    │
│         Tailwind CSS + React Router                              │
└────────────────┬─────────────────────────────────────────────────┘
                 │ HTTP/REST API
                 ↓
┌─────────────────────────────────────────────────────────────────┐
│                    EXPRESS BACKEND                               │
│                  (http://localhost:5000)                         │
├─────────────────────────────────────────────────────────────────┤
│ ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐   │
│ │ Routes       │  │ Controllers  │  │ Middleware           │   │
│ ├──────────────┤  ├──────────────┤  ├──────────────────────┤   │
│ │ • auth.js    │  │ • authCtrl   │  │ • JWT Auth           │   │
│ │ • movies.js  │  │ • movieCtrl  │  │ • Error Handler      │   │
│ │ • users.js   │  │ • userCtrl   │  │ • CORS               │   │
│ └──────────────┘  └──────────────┘  └──────────────────────┘   │
│              ↓                                                    │
│         Models & Validation                                      │
└────────────────┬──────────────┬───────────────────────────────────┘
                 │              │
                 ↓              ↓
          ┌───────────┐  ┌──────────────────────┐
          │ MongoDB   │  │  TMDB API            │
          │           │  │  (themoviedb.org)    │
          │ Collections:│ │ - Trending           │
          │ • Users   │  │ - Popular            │
          │ • (JWT    │  │ - Top Rated          │
          │   stored) │  │ - Search             │
          │           │  │ - Movie Details      │
          └───────────┘  └──────────────────────┘
```

## 📊 Data Flow

### Authentication Flow
```
[Signup Form] 
    ↓
[Submit to /api/auth/register]
    ↓
[Backend validates & hashes password]
    ↓
[Saves User to MongoDB]
    ↓
[Generates JWT Token]
    ↓
[Returns token + user data]
    ↓
[Frontend saves token in localStorage]
    ↓
[AuthContext updates]
    ↓
[Redirect to /dashboard]
```

### Movie Data Flow
```
[Dashboard Page Loads]
    ↓
[Fetch /api/movies/trending]
    ↓
[Backend queries TMDB API]
    ↓
[TMDB returns 20 trending movies]
    ↓
[Backend maps data and returns]
    ↓
[Frontend displays in HeroBanner]
    ↓
[User sees featured movie with actors]
```

### Search Flow
```
[User enters "Inception"]
    ↓
[SearchBar sends query]
    ↓
[Navigate to /search?q=Inception]
    ↓
[Search page fetches /api/movies/search?query=Inception]
    ↓
[Backend queries TMDB]
    ↓
[Returns matching movies]
    ↓
[Display in responsive grid]
```

## 🔐 JWT Authentication Flow

```
1. Login with email/password
2. Backend verifies credentials
3. Backend generates JWT: eyJhbGci...
4. Token stored in localStorage: "token": "eyJhbGci..."
5. Every API request includes: Authorization: Bearer eyJhbGci...
6. Backend middleware verifies token
7. If valid → process request
8. If invalid → return 401 Unauthorized
9. Logout clears token from localStorage
```

## 📱 Component Tree

```
App.js
├── Router
│   ├── Public Routes
│   │   ├── Login
│   │   └── Signup
│   └── Private Routes (Protected by PrivateRoute)
│       ├── Dashboard
│       │   ├── Navbar
│       │   ├── HeroBanner
│       │   └── MovieRow (x3)
│       │       └── MovieCard (x20)
│       ├── MovieDetail
│       │   ├── Navbar
│       │   ├── Movie Info
│       │   └── Cast Grid
│       └── Search
│           ├── Navbar
│           ├── SearchBar
│           └── MovieGrid
│               └── MovieCard
```

## 🔄 State Management

### AuthContext
```javascript
{
  user: {
    id: "...",
    email: "user@example.com",
    firstName: "John",
    lastName: "Doe"
  },
  token: "eyJhbGci...",
  isAuthenticated: true,
  login: (user, token) => {...},
  logout: () => {...}
}
```

### Local Component State
- Movies array in Dashboard
- Search query in SearchBar
- Movie details in MovieDetail
- Form data in Login/Signup

## 📡 API Request Flow with Interceptors

```
[React Component]
    ↓
[API Service (api.js)]
    ↓
[Request Interceptor]
  - Add token to headers
  - Authorization: Bearer token
    ↓
[Axios HTTP Request]
    ↓
[Express Backend]
    ↓
[Auth Middleware]
  - Verify token
  - Extract user ID
    ↓
[Controller Logic]
    ↓
[Response]
    ↓
[Response Interceptor (optional)]
    ↓
[Return to Component]
    ↓
[Update State/UI]
```

## 🎨 UI Component Hierarchy

### Navbar Component
```
<Navbar>
  ├── Logo (Netflix)
  ├── SearchBar
  │   └── Input field
  ├── User Info
  │   ├── First name
  │   └── Logout button
  └── Mobile Menu (responsive)
```

### HeroBanner Component
```
<HeroBanner>
  ├── Backdrop Image
  ├── Gradient Overlay
  ├── Title
  ├── Description
  ├── Rating & Date
  ├── Play Button
  └── More Info Button
```

### MovieRow Component
```
<MovieRow>
  ├── Title
  ├── ScrollContainer
  │   ├── MovieCard (n)
  │   │   ├── Image
  │   │   ├── Overlay
  │   │   ├── Title
  │   │   ├── Play Button
  │   │   └── Info Button
  │   └── ...
  ├── Left Arrow
  └── Right Arrow
```

## 🛡️ Security Features

### Password Security
- Bcryptjs: Passwords hashed with 10 salt rounds
- Never stored in plain text
- Compared using `bcrypt.compare()`

### JWT Security
- Tokens have expiration (7 days)
- Stored in localStorage (frontend)
- Verified on every protected request
- Invalid tokens return 401

### CORS
- Only accepts requests from `http://localhost:3000`
- Configurable in backend `.env`

### Environment Variables
- Sensitive data in `.env` files
- Never committed to git
- Different values for dev/production

## 📊 Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  email: "user@example.com",
  password: "$2a$10$hashed...", // bcrypt hash
  firstName: "John",
  lastName: "Doe",
  profileImage: "https://...",
  watchlist: [
    {
      movieId: 550,
      title: "Fight Club",
      poster: "https://...",
      addedAt: Date
    }
  ],
  createdAt: Date
}
```

## 🔌 API Response Format

### Success Response
```json
{
  "status": "success",
  "data": {...}
}
```

### Error Response
```json
{
  "message": "Error description",
  "error": {...} // Only in development
}
```

### Movie Object
```json
{
  "id": 550,
  "title": "Fight Club",
  "poster": "https://image.tmdb.org/t/p/w500/...",
  "backdrop": "https://image.tmdb.org/t/p/w500/...",
  "description": "A ticking-time-bomb thriller...",
  "rating": 8.8,
  "releaseDate": "1999-10-15",
  "runtime": 139,
  "genres": ["Drama", "Thriller"],
  "budget": 63000000,
  "cast": [
    {
      "id": 287,
      "name": "Brad Pitt",
      "character": "Tyler Durden",
      "image": "https://..."
    }
  ]
}
```

---

## 🚀 Performance Considerations

- **Code Splitting**: React Router lazy loading for pages
- **Image Optimization**: TMDB uses optimized images
- **Caching**: Movies cached in component state
- **Lazy Loading**: Images load on scroll
- **Minimized Bundle**: Tailwind purges unused CSS
- **API Throttling**: TMDB API rate limiting awareness

---

## 🔄 Lifecycle Examples

### Dashboard Page Lifecycle
```
1. Component mounts
2. useEffect runs
3. Fetches trending, popular, top-rated movies
4. Sets loading state
5. Renders HeroBanner + MovieRows
6. User scrolls rows or clicks movie
7. Component unmounts when navigating away
```

### MovieCard Lifecycle
```
1. Receives movie prop
2. Renders image + overlay
3. Hover shows play/info buttons
4. User clicks → navigate to /movie/:id
5. Or click play → should play video (future feature)
```

---

For more details, see **README.md** and **QUICK_START.md**
