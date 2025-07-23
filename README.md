# Brandon Kohler - Professional Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Accessible**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized with lazy loading and efficient animations
- **Contact Form**: Integrated EmailJS for real email functionality
- **Interactive**: Smooth scrolling navigation and interactive elements

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Build Tool**: Vite
- **Email Service**: EmailJS
- **Icons**: Lucide React

## 📁 Project Structure

```
remastered/
├── website/          # Main React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── data/        # Static data files
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions
│   │   └── types/       # TypeScript type definitions
│   └── public/          # Static assets
└── documents/        # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/remastered.git
   cd remastered/website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env-template.txt .env
   # Edit .env with your EmailJS credentials
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📧 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{name}}`, `{{email}}`, `{{company}}`, `{{subject}}`, `{{message}}`, `{{time}}`
4. Add your credentials to the `.env` file

## 🎨 Customization

- **Content**: Edit files in `src/data/` to update your information
- **Styling**: Modify Tailwind classes or add custom CSS
- **Animations**: Adjust Framer Motion animations in `src/lib/animations.ts`

## 📦 Build for Production

```bash
npm run build
```

## 🌐 Deployment

The site can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ by Brandon Kohler** 