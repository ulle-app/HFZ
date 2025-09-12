# HFZ - FitIndia Hub

A modern, responsive fitness website built with React, TypeScript, and Tailwind CSS. This comprehensive fitness platform provides information about fitness services, trainers, memberships, and more.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Multi-page Navigation**: Complete website with routing for different sections
- **Real-time Business Hours**: Dynamic display of business status (open/closed)
- **Modern Tech Stack**: Built with the latest web technologies
- **Interactive Components**: Engaging user interface elements
- **SEO Optimized**: Clean structure and semantic HTML

## 🏗️ Project Structure

```
HFZ/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Hero.tsx         # Hero section component
│   │   ├── ServiceCard.tsx  # Service card component
│   │   └── TestimonialCard.tsx # Testimonial component
│   ├── pages/               # Page components
│   │   ├── Home.tsx         # Landing page
│   │   ├── About.tsx        # About page
│   │   ├── Services.tsx     # Services page
│   │   ├── Certification.tsx # Certification page
│   │   ├── Membership.tsx   # Membership page
│   │   ├── Trainers.tsx     # Trainers page
│   │   ├── Contact.tsx      # Contact page
│   │   ├── Transformations.tsx # Transformations page
│   │   ├── Nutrition.tsx    # Nutrition page
│   │   ├── Challenges.tsx   # Challenges page
│   │   └── OnlineTraining.tsx # Online training page
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Application entry point
├── public/                  # Static assets
├── dist/                    # Build output directory
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd HFZ
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🛠️ Technology Stack

### Core Technologies
- **React 18.3.1** - UI library for building user interfaces
- **TypeScript 5.5.3** - Type-safe JavaScript
- **Vite 5.4.2** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React 0.344.0** - Beautiful icons
- **PostCSS 8.4.35** - CSS processing

### Routing
- **React Router DOM 7.8.2** - Client-side routing

### Development Tools
- **ESLint 9.9.1** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite Plugin React** - React support for Vite

## 🎨 Design Features

- **Dark Theme**: Sleek dark color scheme with `#15171C` background
- **Modern Typography**: Clean and readable fonts
- **Interactive Elements**: Hover effects and animations
- **Mobile Responsive**: Optimized for all device sizes
- **Professional Layout**: Well-structured sections and components

## 📱 Pages Overview

- **Home**: Landing page with hero section, services overview, and testimonials
- **About**: Information about FitIndia Hub
- **Services**: Detailed fitness services offered
- **Certification**: Professional certification programs
- **Membership**: Membership plans and pricing
- **Trainers**: Meet the fitness trainers
- **Contact**: Contact information and form
- **Transformations**: Success stories and transformations
- **Nutrition**: Nutrition guidance and plans
- **Challenges**: Fitness challenges and events
- **Online Training**: Virtual training programs

## 🔧 Configuration Files

- **`vite.config.ts`**: Vite build configuration
- **`tsconfig.json`**: TypeScript configuration
- **`tailwind.config.js`**: Tailwind CSS customization
- **`eslint.config.js`**: ESLint rules and settings
- **`postcss.config.js`**: PostCSS plugins configuration

## 🚀 Deployment

### Automatic Deployment to GitHub Pages

This project is configured with GitHub Actions for automatic deployment to GitHub Pages. Every commit to the `main` branch will trigger a build and deployment.

#### Setup Instructions:

1. **Push your code** to GitHub repository on the `main` branch

2. **Enable GitHub Pages** in your repository:
   - Go to **Settings** > **Pages**
   - **Source**: Select "**GitHub Actions**" (not "Deploy from a branch")

3. **Repository Settings**:
   - Go to **Settings** > **Actions** > **General**
   - Under "Workflow permissions", select "**Read and write permissions**"
   - Check "Allow GitHub Actions to create and approve pull requests"

4. **Automatic Deployment**:
   - Push commits to `main` branch
   - GitHub Actions will automatically build and deploy
   - View deployment status in the **Actions** tab
   - Your site will be available at: `https://yourusername.github.io/HFZ/`

#### Manual Build (Local):

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Alternative Deployment Options
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or use git integration
- **Firebase Hosting**: Deploy using Firebase CLI

### GitHub Actions Workflow

The CI/CD pipeline includes:
- ✅ **Code Quality**: Runs ESLint checks
- ✅ **Build Process**: Compiles TypeScript and bundles assets
- ✅ **Automated Deployment**: Deploys to GitHub Pages
- ✅ **Concurrent Protection**: Prevents conflicting deployments

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

- Follow TypeScript best practices
- Use functional components with hooks
- Implement responsive design patterns
- Write clean, maintainable code
- Follow the established project structure
- Test components before committing

## 🐛 Known Issues

- None currently identified

## 📞 Support

For support and questions, please contact through the website's contact page or open an issue in the repository.

## 📄 License

This project is private and proprietary. All rights reserved.

---

**Built with ❤️ for FitIndia Hub**