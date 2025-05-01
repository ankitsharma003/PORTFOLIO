# Ankit Sharma | Professional Portfolio

A modern, responsive portfolio website built with React, showcasing my skills, projects, and professional journey as a Front-End Developer.

View live site: [ankit-sharma.onrender.com](https://ankit-sharma.onrender.com/)

## Features

- **Modern UI/UX** - Clean design with smooth animations and transitions
- **Responsive Layout** - Optimized for all devices from mobile to desktop
- **Dark/Light Mode** - Toggle between color themes for comfortable viewing
- **Interactive Components** - Engaging user experience with micro-interactions
- **Project Showcase** - Visually appealing project displays with image carousels
- **Contact Form** - Fully functional form with validation and submission feedback
- **Optimized Performance** - Fast loading times and smooth scrolling
- **Preloader Animation** - Engaging loading screen with SVG animations
- **Floating Action Button** - Quick navigation access on mobile and desktop
- **404 Page** - Custom not found page for better user experience
- **Automated Tests** - End-to-end testing for critical user flows

## Tech Stack

- **React.js** - Frontend framework
- **Framer Motion** - Advanced animations and transitions
- **React Router** - Seamless page navigation
- **CSS3** - Custom styling with modern CSS features
- **AOS** - Scroll animations
- **React Icons** - Professional iconography
- **Web3Forms** - Serverless form submissions
- **Playwright** - End-to-end testing

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/ankitsharma003/portfolio.git
   ```

2. Navigate to the project directory

   ```bash
   cd portfolio
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the development server

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Testing

Run end-to-end tests to verify site functionality:

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run tests
npm run test:e2e
```

## Project Structure

```
portfolio/
├── public/             # Public assets
├── src/                # Source files
│   ├── assets/         # Images and static assets
│   ├── components/     # Reusable components
│   │   ├── FloatingActionButton/  # Quick navigation menu
│   │   ├── Hero/                  # Hero section
│   │   ├── Preloader/             # Loading screen
│   │   ├── ScrollToTop/           # Scroll to top button
│   │   ├── SideNavbar/            # Navigation menu
│   │   ├── ThemeSwitcher/         # Dark/light theme toggle
│   │   └── project display/       # Project showcase
│   ├── pages/          # Page components
│   │   ├── Contact/    # Contact page
│   │   ├── NotFound/   # 404 page
│   │   └── about/      # About page
│   ├── App.js          # Main App component
│   └── index.js        # Entry point
├── tests/              # E2E test files
└── package.json        # Dependencies and scripts
```

## Contact

Feel free to reach out to me for collaborations or inquiries:

- Email: ankkiit7@gmail.com
- GitHub: [@ankitsharma003](https://github.com/ankitsharma003)
- LinkedIn: [Ankit Sharma](https://www.linkedin.com/in/ankit-sharma-515a842b9/)
- Instagram: [@\_ankkit7](https://www.instagram.com/_ankkit7/)

## License

This project is open source and available under the [MIT License](LICENSE).

## Recent Updates

- **Enhanced Hero Animations** - Added staggered animations for a more engaging introduction
- **Dark Mode Improvements** - Fixed styling issues in Contact and 404 pages
- **UI Component Positioning** - Optimized placement of floating action buttons and theme switcher
- **Performance Optimization** - Improved loading and rendering performance
- **Visual Refinements** - Added shadow effects and transition improvements

## Setup Notes

When deploying, note that the Floating Action Button and Theme Switcher are positioned at the right side of the page. The Floating Action Button is positioned above the Theme Switcher to avoid overlap and is primarily for quick navigation.
