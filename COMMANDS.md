#!/bin/bash
# Netflix Clone - Common Commands

## ============================================
## SETUP & INSTALLATION
## ============================================

# Backend Setup
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials

# Frontend Setup
cd frontend
npm install
cp .env.example .env

## ============================================
## RUNNING THE APPLICATION
## ============================================

# Terminal 1 - Start Backend
cd backend
npm run dev
# Output: Server running on port 5000

# Terminal 2 - Start Frontend
cd frontend
npm start
# Output: Open http://localhost:3000

## ============================================
## DEVELOPMENT COMMANDS
## ============================================

# Backend - Development with auto-reload
npm run dev

# Backend - Production run
npm start

# Frontend - Development with hot reload
npm start

# Frontend - Build for production
npm run build

# Frontend - Run tests
npm test

## ============================================
## DEPENDENCIES MANAGEMENT
## ============================================

# Install all dependencies
npm install

# Install specific package
npm install package-name

# Update packages
npm update

# List installed packages
npm list

# Check outdated packages
npm outdated

## ============================================
## DATABASE COMMANDS
## ============================================

# Start MongoDB (local)
# Windows: net start MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# Connect to MongoDB
mongosh

# List databases
show databases

# Use netflix database
use netflix-clone

# Find all users
db.users.find()

# Count users
db.users.count()

# Delete all users (CAUTION!)
db.users.deleteMany({})

# Exit MongoDB
exit

## ============================================
## API TESTING (Using curl)
## ============================================

# Get trending movies
curl http://localhost:5000/api/movies/trending

# Get popular movies
curl http://localhost:5000/api/movies/popular

# Search for movies
curl "http://localhost:5000/api/movies/search?query=Inception"

# Get movie details
curl http://localhost:5000/api/movies/550

# Signup
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123","firstName":"John","lastName":"Doe"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'

## ============================================
## PORT MANAGEMENT
## ============================================

# Check if port is in use (Windows)
netstat -ano | findstr :5000
netstat -ano | findstr :3000

# Kill process on port (Windows)
taskkill /PID <PID> /F

# Check if port is in use (Mac/Linux)
lsof -i :5000
lsof -i :3000

# Kill process on port (Mac/Linux)
kill -9 <PID>

## ============================================
## GIT COMMANDS
## ============================================

# Initialize git
git init

# Add all files
git add .

# Commit changes
git commit -m "Your message"

# Check status
git status

# View log
git log --oneline

# Create branch
git branch feature-name

# Switch branch
git checkout feature-name

## ============================================
## DEBUGGING & TROUBLESHOOTING
## ============================================

# View backend logs
tail -f logs/app.log

# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node version
node --version

# Check npm version
npm --version

# Update npm
npm install -g npm@latest

# Clear terminal
clear (Mac/Linux)
cls (Windows)

## ============================================
## FILE MANAGEMENT
## ============================================

# Navigate to directory
cd path/to/directory

# List files
ls (Mac/Linux)
dir (Windows)

# Create directory
mkdir folder-name

# Create file
touch filename.js
echo "" > filename.js

# Copy file
cp source.js destination.js

# Move/Rename file
mv oldname.js newname.js

# Remove file
rm filename.js

# Remove directory
rm -rf folder-name

## ============================================
## ENVIRONMENT VARIABLES
## ============================================

# Create .env from example
cp .env.example .env

# View .env content
cat .env

# Edit .env
nano .env (Mac/Linux)
notepad .env (Windows)

# Required Backend .env:
MONGODB_URI=mongodb://localhost:27017/netflix-clone
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
TMDB_API_KEY=your_api_key_here
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Required Frontend .env:
REACT_APP_API_URL=http://localhost:5000/api

## ============================================
## USEFUL SHORTCUTS
## ============================================

# Save time - create aliases
alias start-backend="cd backend && npm run dev"
alias start-frontend="cd frontend && npm start"
alias open-mongo="mongosh"

# Use them
start-backend
start-frontend

## ============================================
## PERFORMANCE MONITORING
## ============================================

# Backend - Use process manager
npm install -g pm2
pm2 start server.js
pm2 stop server.js
pm2 logs

# Frontend - Check bundle size
npm run build
ls -lh build/static/js/main.*

## ============================================
## QUICK REFERENCE - DO THIS FIRST
## ============================================

# 1. Install dependencies
cd backend && npm install && cd ../frontend && npm install

# 2. Setup environment
cd backend && cp .env.example .env
cd ../frontend && cp .env.example .env

# 3. Edit .env files with your credentials

# 4. Start MongoDB
# Choose based on your OS:
# Windows: net start MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# 5. Terminal 1 - Backend
cd backend && npm run dev

# 6. Terminal 2 - Frontend
cd frontend && npm start

# 7. Open browser
# http://localhost:3000

# 8. Sign up and enjoy!

## ============================================
## USEFUL RESOURCES
## ============================================

# Official Docs
React: https://react.dev
Express: https://expressjs.com
MongoDB: https://docs.mongodb.com
Tailwind: https://tailwindcss.com
TMDB: https://www.themoviedb.org/settings/api

# Helpful Tools
VS Code: https://code.visualstudio.com
MongoDB Compass: https://www.mongodb.com/products/compass
Postman: https://www.postman.com
Git Bash: https://git-scm.com

## ============================================
## NOTES
## ============================================

# Always ensure .env files are in .gitignore
# Never commit API keys or secrets to git
# Use process manager (pm2) for production
# Keep MongoDB updated
# Update npm packages regularly
# Test locally before deploying
# Use environment variables for all configs
# Document your customizations

## ============================================
# End of Commands - Happy Coding! 🚀
## ============================================
