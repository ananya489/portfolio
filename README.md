# Ananya Rajput - Portfolio Website





A premium, modern 3D portfolio website built with Next.js, React Three Fiber, and Framer Motion.

## 🚀 Features

- **3D Interactive Elements**: Particle backgrounds and floating animations using Three.js
- **Smooth Page Transitions**: Seamless navigation with Framer Motion
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Modern Design**: Dark theme with cyan, blue, coral, and purple accent colors
- **Premium UI/UX**: Glassmorphism effects, gradient backgrounds, and micro-interactions
- **Multi-page Architecture**: Separate routes for Home, About, Skills, Projects, Certifications, Experience, and Contact

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── skills/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── certifications/
│   │   │   └── page.tsx
│   │   ├── experience/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Navbar.tsx
│       ├── PageTransition.tsx
│       └── Background3D.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Space Grotesk (Google Fonts)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📄 Pages Overview

### Home (/)
- Fullscreen cinematic hero section
- Animated 3D particle background
- CTA buttons to navigate to key sections
- Social media links

### About (/about)
- Professional introduction
- Education timeline
- Core focus areas with interactive cards

### Skills (/skills)
- Visual skill categories with progress bars
- Grouped by: Programming, Web Dev, AI/ML, Tools
- Animated skill highlights

### Projects (/projects)
- Premium project showcase
- Detailed modal views for each project
- Farm Fusion (flagship), Mental Health Support, Breast Cancer Detection, Portfolio

### Certifications (/certifications)
- AWS Cloud Practitioner
- Oracle Cloud Infrastructure AI Foundations
- Oracle Academy Database Programming
- Deloitte Cyber Security Simulation

### Experience (/experience)
- Timeline-style layout
- Deloitte Virtual Internship details
- Key learnings and skills developed

### Contact (/contact)
- Elegant contact form with validation
- Social media links
- Quick info section

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  dark: { ... },
  accent: {
    cyan: '#00d4ff',
    coral: '#ff6b6b',
    blue: '#4d7cfe',
    purple: '#a78bfa',
  },
}
```

### Content
Update content in respective page files:
- Personal info: `src/app/page.tsx`
- Projects: `src/app/projects/page.tsx`
- Skills: `src/app/skills/page.tsx`
- etc.

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project to Vercel
3. Deploy with one click

### Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Use the Amplify Console
- **Custom Server**: Build and deploy the `.next` folder

## 📝 Environment Variables

Create a `.env.local` file for any environment variables:
```
# Add your environment variables here
```

## 🔧 Troubleshooting

### 3D Elements Not Rendering
- Ensure WebGL is supported in your browser
- Check browser console for Three.js errors

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ananya Rajput**
- GitHub: [@ananya-rajput](https://github.com/ananya-rajput)
- LinkedIn: [Ananya Rajput](https://linkedin.com/in/ananya-rajput)
- Email: ananya.rajput@example.com

---

Built with ❤️ using Next.js, React Three Fiber, and Framer Motion
