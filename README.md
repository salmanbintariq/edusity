<div align="center">

# 🎓 Edusity

### *Empowering education through innovation*

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge)](https://salmanbintariq.github.io/edusity/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**A modern educational platform showcasing innovative learning solutions**

[Live Demo](https://salmanbintariq.github.io/edusity/) · [Report Bug](https://github.com/salmanbintariq/edusity/issues) · [Request Feature](https://github.com/salmanbintariq/edusity/issues)

</div>

---

## 📸 Screenshots

### 🏠 Hero Section
![Hero Section](/public/screenshots/home.png)

### 📚 Programs Overview
![Programs Section](/public/screenshots/program.png)

### 🎯 Campus Life
![Campus Section](/public/screenshots/campus.png)

---

## ✨ Features

- **⚡ React 19** - Latest React version with improved performance
- **🎨 Tailwind CSS** - Modern utility-first CSS framework
- **📜 Smooth Scrolling** - Seamless navigation with react-scroll
- **📧 Contact Form** - Integrated with Web3Forms for easy submissions
- **🎭 Responsive Design** - Mobile-first approach for all devices
- **⚙️ Hot Module Replacement** - Instant feedback during development
- **🚀 Optimized Build** - Production-ready with Vite
- **🎯 SEO Friendly** - Optimized for search engines

---

## 🛠️ Tech Stack

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![GitHub Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

</div>

### Core Technologies

- **React 19** - Modern React with enhanced features
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Latest version for powerful styling
- **React Scroll** - Smooth scrolling navigation
- **Web3Forms** - Backend-free contact form handling

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/salmanbintariq/edusity.git
   cd edusity
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (Optional)
   
   Create a `.env` file in the root directory:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
   
   Get your free access key from [Web3Forms](https://web3forms.com/)

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) in your browser

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run deploy` | Deploy to GitHub Pages |

---

## 📁 Project Structure

```
edusity/
├── public/                 # Static assets
│   └── screenshots/        # Project screenshots
├── src/
│   ├── components/         # React components
│   │   ├── Navbar/        # Navigation component
│   │   ├── Hero/          # Hero section
│   │   ├── Programs/      # Programs showcase
│   │   ├── Campus/        # Campus gallery
│   │   ├── Testimonials/  # Student testimonials
│   │   ├── Contact/       # Contact form
│   │   └── Footer/        # Footer component
│   ├── assets/            # Images, icons, styles
│   ├── App.jsx            # Main application component
│   └── main.jsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── eslint.config.js       # ESLint configuration
```

---

## 🎯 Key Features Implementation

### Smooth Scrolling with react-scroll

```jsx
import { Link } from 'react-scroll';

<Link 
  to="programs" 
  smooth={true} 
  duration={500} 
  offset={-70}
>
  Programs
</Link>
```

### Web3Forms Integration

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  formData.append("access_key", "YOUR_ACCESS_KEY");
  
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });
  
  const data = await response.json();
  // Handle response
};
```

## 🚢 Deployment

This project is deployed on **GitHub Pages**.

### Quick Deploy

```bash
npm run deploy
```

### Manual Deployment Steps

1. **Update package.json**
   ```json
   "homepage": "https://salmanbintariq.github.io/edusity/"
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Continuous Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        if: github.ref == 'refs/heads/main'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 🎨 Customization Guide

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `App.jsx`
3. Add navigation link with react-scroll
4. Style with Tailwind CSS classes

### Modifying Colors

Edit `tailwind.config.js` to match your brand:

```js
theme: {
  extend: {
    colors: {
      'brand-blue': '#0066cc',
      'brand-green': '#00cc66',
    }
  }
}
```

### Updating Content

Edit component files in `src/components/` to update text, images, and layout.

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn and create. Any contributions are **greatly appreciated**!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Muhammad Salman**

- 📧 Email: [salmantariq8018@gmail.com](mailto:salmantariq8018@gmail.com)
- 💼 LinkedIn: [muhammad-salman-182171230](https://www.linkedin.com/in/muhammad-salman-182171230)
- 🐙 GitHub: [@salmanbintariq](https://github.com/salmanbintariq)

---

## 🙏 Acknowledgments

- [React](https://react.dev/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Scroll](https://www.npmjs.com/package/react-scroll) - Smooth scrolling library
- [Web3Forms](https://web3forms.com/) - Contact form without backend
- [GitHub Pages](https://pages.github.com/) - Free hosting platform

---

## 📞 Support

For support, email [salmantariq8018@gmail.com](mailto:salmantariq8018@gmail.com) or open an issue in the [GitHub repository](https://github.com/salmanbintariq/edusity/issues).

---

## 🗺️ Roadmap

- [ ] Add student dashboard
- [ ] Implement course catalog
- [ ] Add blog section
- [ ] Add multilingual support
- [ ] Mobile app development

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

Made with ❤️ by [Muhammad Salman](https://github.com/salmanbintariq)

**Edusity** - Transforming Education, One Click at a Time

</div>