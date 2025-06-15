# Style Fortune 🎨

Style Fortune is an interactive web application that helps users discover their professional style through a fun and engaging clothing selection process. The app uses a combination of user choices to determine their professional archetype and provides detailed insights about their career path.

## 🌟 Features

- **Interactive Character Creation**: Users can customize their character by selecting different clothing items
- **Step-by-Step Process**: Guided selection process for hat, top, pants, and shoes
- **Real-time Preview**: See your character update as you make selections
- **Professional Insights**: Get detailed information about your professional archetype
- **Social Sharing**: Share your results on various social media platforms
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Beautiful UI**: Modern design with smooth animations and transitions

## 🛠️ Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Netlify
- **Version Control**: Git

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/style-fortune.git
   cd style-fortune
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

1. Create a production build:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## 📦 Project Structure

```
style-fortune/
├── src/
│   ├── components/        # React components
│   ├── types/            # TypeScript type definitions
│   ├── data/             # Game data and configurations
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md           # Project documentation
```

## 🚀 Deployment

### Netlify Deployment

1. **Automatic Deployment**
   - Connect your GitHub repository to Netlify
   - Netlify will automatically detect the Vite project
   - Configure build settings:
     - Build command: `npm run build` or `yarn build`
     - Publish directory: `dist`
     - Node version: 16 (or higher)

2. **Manual Deployment**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Login to Netlify
   netlify login

   # Initialize and deploy
   netlify init
   netlify deploy --prod
   ```

### Environment Variables

Create a `.env` file in the root directory:
```env
VITE_API_URL=your_api_url_here
```

## 🎨 Customization

### Adding New Clothing Items

1. Navigate to `src/data/clothing.ts`
2. Add new items to the appropriate category array
3. Each item should follow the `ClothingItem` interface structure

### Modifying Professional Archetypes

1. Navigate to `src/data/professions.ts`
2. Add or modify profession objects
3. Ensure each profession follows the `Profession` interface structure

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌐 Live Demo

Visit the live application at: [Style Fortune](https://daliametwally-carousel.netlify.app/)

## 🙏 Acknowledgments

- Design inspiration from [Dalia Osama](https://www.behance.net/Dalia_Osama0309)
- Icons provided by [Lucide Icons](https://lucide.dev)
- Built with [Vite](https://vitejs.dev)
- Hosted on [Netlify](https://www.netlify.com)

## 📞 Support

For support, email mostafametwaly96@gmail.com or open an issue in the GitHub repository. 