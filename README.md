# Jordan Schiff - Personal Portfolio & Blog

A modern, responsive personal portfolio website and blog built with React, featuring professional experience, technical articles, and interactive components. This website showcases my journey as a Full Stack Engineer at Evertune AI and provides insights into software engineering, AI, and career development.

## 🚀 Features

- **Responsive Design**: Fully responsive layout optimized for all devices
- **Modern UI/UX**: Clean, professional design with smooth animations powered by Framer Motion
- **Blog Platform**: Technical articles and insights with consistent styling and SEO optimization
- **Interactive Components**: 
  - About Me section with professional background
  - Tech Stack showcase with animated icons
  - Experience timeline with company logos
  - Project portfolio with detailed cards
  - Education section highlighting University of Michigan
  - Contact buttons with direct email/LinkedIn/GitHub links
- **SEO Optimized**: Meta tags, structured data, and performance best practices
- **Performance Optimized**: Lazy loading, optimized images, and efficient bundling

## 🛠️ Technologies Used

- **Frontend**: React.js, Framer Motion, Tailwind CSS
- **Styling**: CSS3, Tailwind CSS with custom components
- **Build Tools**: Create React App, PostCSS
- **Performance**: React Helmet Async, lazy loading, image optimization
- **Deployment**: Netlify (with redirects and sitemap)

## 📦 Project Structure

```
src/
├── components/
│   ├── AboutPage/
│   │   ├── AboutMe.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── ProjectCard.js
│   │   └── TechStack.js
│   ├── HomePage/
│   │   └── ContactButtons.js
│   ├── BlogPage/
│   │   └── BlogCard.js
│   ├── Navigation.js
│   ├── HomePage.js
│   ├── About.js
│   └── Blog.js
├── pages/
│   ├── BuildingScalableWebApplications.jsx
│   ├── ValueBeyondPrice.jsx
│   ├── TheFutureOfAI.jsx
│   └── MyJourneyFromUniversityToFullStack.jsx
├── styles/
│   ├── *.css
│   └── [component-specific styles]
├── assets/
│   ├── blogImages/
│   │   ├── react-architecture-hero.png
│   │   └── react-architecture-diagram.webp
│   └── [company logos and other assets]
├── util/
│   ├── constants.js
│   ├── blogConstants.js
│   └── seo.js
├── utils/
│   └── seo.js
├── App.js
└── index.js
```

## 📝 Blog Content

The website features a growing collection of technical articles covering:

- **Software Engineering**: React architecture, scalable applications, best practices
- **AI & Technology**: Future of AI in development, machine learning insights
- **Career Development**: Journey from university to professional engineering
- **Product Insights**: Value propositions and industry analysis

Each blog post includes:
- SEO-optimized meta tags and structured data
- Consistent styling with responsive design
- Interactive elements and smooth animations
- Category filtering and search functionality

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd personalWebsite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🎨 Customization

### Personal Information
- Update contact details in `HomePage.js` and `ContactButtons.js`
- Modify experience and education in respective component files
- Add new projects to the `PROJECTS` array in `constants.js`

### Blog Content
- Add new blog posts to `blogConstants.js`
- Create new page components in `src/pages/`
- Update categories and tags as needed

### Styling
- Customize Tailwind classes for consistent theming
- Modify component-specific CSS files
- Update color schemes and typography

## 🔧 Development

### Adding New Blog Posts
1. Create a new page component in `src/pages/`
2. Add blog post metadata to `src/util/blogConstants.js`
3. Import and use the `setBlogPostSEO` utility for SEO optimization
4. Follow the established styling patterns for consistency

### SEO Optimization
- Use `setBlogPostSEO` utility for comprehensive meta tags
- Include structured data for better search engine understanding
- Optimize images with proper alt text and lazy loading
- Maintain consistent URL structure and canonical links

## 📊 Performance Features

- **Image Optimization**: WebP format, lazy loading, responsive sizes
- **Code Splitting**: Dynamic imports for better initial load times
- **SEO Best Practices**: Meta tags, structured data, semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

## 🌐 Deployment

The website is deployed on Netlify with:
- Automatic builds from the main branch
- Custom redirects for clean URLs
- Sitemap generation for search engines
- Performance monitoring and analytics

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Jordan Schiff** - Full Stack Engineer at Evertune AI
- 📧 Email: [jordan41schiff@gmail.com](mailto:jordan41schiff@gmail.com)
- 📱 Phone: (720) 626-9100
- 💼 LinkedIn: [https://www.linkedin.com/in/jhschiff/](https://www.linkedin.com/in/jhschiff/)
- 🐙 GitHub: [https://github.com/jhschiff](https://github.com/jhschiff)
- 🌐 Website: [https://jordanschiff.com](https://jordanschiff.com)

---

*Built with ❤️ using React, Framer Motion, and modern web technologies*
