# Al Quran - A Beautiful Reading Experience

A modern, responsive web application for reading the Holy Quran with English translation. Built with React and powered by the [alquran.cloud API](https://alquran.cloud/api).

![Al Quran App](./public/og-image.png)

## ✨ Features

- **📖 Complete Quran Text**: Read all 114 Surahs with clear Arabic typography
- **🌍 English Translation**: Sahih International translation included by default
- **🔍 Smart Search**: Search across the entire Quran to find specific verses
- **📚 Juz Navigation**: Browse by Juz (30 parts) for structured reading
- **🎨 Beautiful UI**: Clean, modern design with responsive layout for all devices
- **⚡ Fast Performance**: Built with Vite for instant loading and smooth interactions
- **📱 Mobile Friendly**: Optimized for reading on phones, tablets, and desktops

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yasir-dev-lab/Al_Quran.git
   cd Al_Quran
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Hooks (Context API)
- **API**: [alquran.cloud](https://alquran.cloud/api)
- **Fonts**: 
  - Amiri (Arabic text)
  - Inter (English text)

## 📁 Project Structure

```
Al_Quran/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Layout.jsx
│   │   ├── SurahCard.jsx
│   │   └── SearchBar.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── SurahPage.jsx
│   │   ├── Search.jsx
│   │   └── Juz.jsx
│   ├── services/        # API integration
│   │   └── quranApi.js
│   ├── hooks/           # Custom React hooks
│   │   └── useQuran.js
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🔌 API Integration

This app uses the free [alquran.cloud API](https://alquran.cloud/api) which provides:
- Multiple editions of the Quran (Arabic, translations, transliterations)
- Audio recitations from various reciters
- Tafsir (exegesis) content
- Search functionality

No API key is required for basic usage.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [alquran.cloud](https://alquran.cloud) for providing the amazing API
- All the scholars and translators who made the Quran accessible
- The open-source community for the wonderful tools we use

---

Built with ❤️ by Yasir & Jack
