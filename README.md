# Countries Explorer

A modern, fully-featured countries information web application built with React and Tailwind CSS. Browse, search, and explore detailed information about countries from around the world.

## 🚀 Features

- **Browse All Countries**: View a comprehensive list of all countries with flags, capitals, population, and regions
- **Search Functionality**: Real-time search to find countries by name
- **Filter by Region**: Filter countries by their geographical region
- **Detailed Country Pages**: Click any country to view comprehensive details including:
  - Official name and flag
  - Population and area
  - Capital city and region
  - Time zones and currencies
  - Languages spoken
  - Border countries
- **Dark Mode Support**: Toggle between light and dark themes with persistent localStorage
- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop
- **Skeleton Loading**: Beautiful loading skeletons while fetching data
- **Error Handling**: Custom 404 error page for invalid routes
- **Smooth Animations**: Framer Motion animations for enhanced user experience

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with hooks (useState, useEffect, useContext)
- **React Router DOM** - Client-side routing with dynamic routes
- **Tailwind CSS v4** - Utility-first CSS framework for styling
- **Axios** - HTTP client for API requests

### Animations & Effects
- **Framer Motion** - Advanced animations and transitions
  - AnimatePresence for mount/unmount animations
  - motion components for smooth transitions
  - Page and element-level animations

### Development Tools
- **Vite** - Fast build tool and dev server
- **npm** - Package manager

## 📦 Dependencies

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "axios": "^1.x",
  "framer-motion": "^10.x",
  "tailwindcss": "^4.x"
}
```
## 🔄 State Management

- **React Context API** - Theme state management (light/dark mode)
- **useState** - Local component state for search, filters, loading
- **useEffect** - Data fetching and side effects

## 🌐 API Integration

### REST Countries API
- Endpoint: `https://restcountries.com/v3.1`
- Fetches all countries with: name, flags, capital, population, region
- Individual country lookup by name with full text search

## 🔗 Routes

- `/` - Home page with all countries
- `/country/:name` - Country details page
- `*` - 404 error page

## 🔐 Features

- ✅ No API keys required (public REST Countries API)
- ✅ No backend needed (frontend-only application)
- ✅ Works offline after initial load (with service worker potential)
- ✅ Secure theme persistence in localStorage
- ✅ XSS-safe React rendering

## 📖 Learning Outcomes

This project demonstrates:
- React hooks (useState, useEffect, useContext)
- React Router for SPA navigation
- Context API for state management
- Async data fetching with error handling
- Tailwind CSS for modern styling
- Framer Motion for smooth animations
- localStorage for persistence
- Responsive design principles
- Component composition and reusability
## 📄 License

Open source project - feel free to use and modify.

## 🙏 Credits

- **API**: [REST Countries](https://restcountries.com/)
- **Framework**: React & Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion