# Maliika-s-birthday-2026

✨ Moonlit Carnival 19th Birthday Surprise Web App for Matsurika (Mallika) by Kuttush ✨

---

## 📁 Project Architecture (Frontend & Backend Folders)

```
Matsu-Chan's BrrthDay 2026/
├── frontend/                     # Vite + React (Mobile-First Client)
│   ├── public/
│   │   ├── photos/               # Matsurika's compressed photos (photo1.jpg ... photo5.jpg)
│   │   └── music.mp3             # Romantic background soundtrack
│   ├── src/
│   │   ├── components/
│   │   │   ├── StarBackground.jsx# Twinkling night sky & floating fireflies
│   │   │   ├── LockScreen.jsx    # Secret question & bcrypt verification
│   │   │   ├── MusicPlayer.jsx   # Floating audio pill & sound wave equalizer
│   │   │   ├── HeroIntro.jsx     # "Happy 19th Birthday" + celebratory confetti
│   │   │   ├── TimelineSection.jsx # "Since Class 11" 5-moment photo story & zoom
│   │   │   ├── PhotoGallery.jsx  # Touch swipe slideshow with captions
│   │   │   ├── NineteenReasons.jsx # 19 3D flipping love cards & progress tracker
│   │   │   ├── LoveLetter.jsx    # Typewriter love letter with wax seal
│   │   │   ├── FinalSurprise.jsx # Fireworks + Mutton Kosha gift reveal + wish lantern
│   │   │   └── QRCodeModal.jsx   # Printable QR birthday card generator
│   │   ├── content.js            # ⭐ ALL EDITABLE TEXT IN ONE PLACE
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css             # Dark navy, black, and gold design system
│   └── package.json
│
└── backend/                      # Node.js + Express + Supabase + MVC Architecture
    ├── config/
    │   └── supabase.js           # Supabase client (with local development fallback)
    ├── controllers/
    │   ├── authController.js     # Bcrypt unlock logic
    │   ├── contentController.js  # Birthday surprise content provider
    │   └── wishController.js     # Records Matsurika's wishes in Supabase
    ├── models/
    │   ├── authModel.js          # Bcrypt hashing & verification
    │   ├── contentModel.js       # Data model
    │   └── wishModel.js          # Supabase model with memory fallback
    ├── routes/
    │   ├── authRoutes.js         # POST /api/unlock, POST /api/hash
    │   ├── contentRoutes.js      # GET /api/content
    │   └── wishRoutes.js         # POST /api/wishes, GET /api/wishes
    ├── views/
    │   └── responseView.js       # MVC View formatter for JSON responses
    ├── server.js                 # Express server on port 5000
    ├── supabase_schema.sql       # Optional SQL schema for Supabase
    └── .env.example
```

---

## 🚀 How to Run Locally

### 1. Start the Backend
Open a terminal in the `backend` folder:
```powershell
cd backend
npm install
node server.js
```
The backend will run on **http://localhost:5000**.

### 2. Start the Frontend
Open a second terminal in the `frontend` folder:
```powershell
cd frontend
npm install
npm run dev
```
The frontend will open on **http://localhost:5173**.

---

## ✏️ How to Edit Text & Messages
All text is organized in one single file:
👉 **`frontend/src/content.js`**

You can easily change:
- **Secret Answer / Question**: Change `lockScreen.question` or `lockScreen.acceptedAnswers`.
- **19 Reasons**: Modify any of the 19 reasons in `reasons: [...]`.
- **Timeline Captions**: Edit the stories in `timeline: [...]`.
- **Love Letter**: Customize the heartfelt letter paragraphs in `loveLetter.paragraphs`.
- **Final Surprise**: Edit the dinner plan or time in `finalSurprise.revealMessage`.

---

## 🖨️ How to Print the Card & QR Code
1. Open the app in your browser at `http://localhost:5173`.
2. Tap the **"Print Card"** button at the top left.
3. Paste your deployed URL (e.g., `https://matsurika19.vercel.app`) or leave it as is.
4. Click **"Print Card to Give Her 🖨️"** to print out a birthday card with the QR code to slip into her envelope or gift!

---

## 🌐 Free Deployment (Vercel or Netlify)

### Option A: Deploy Frontend to Vercel (Recommended - 2 Minutes)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Set the **Root Directory** to `frontend`.
5. Click **Deploy**.
6. That's it! Your link will be live (e.g., `https://matsu-birthday.vercel.app`).
*(The frontend has an automatic local fallback so it functions completely even if deployed without the backend).*

### Option B: Deploy Frontend to Netlify
1. Go to [netlify.com](https://netlify.com) and click **"Add new site"** -> **"Import an existing project"**.
2. Select your repository.
3. Base directory: `frontend`
4. Build command: `npm run build`
5. Publish directory: `frontend/dist`
6. Click **Deploy Site**.

### (Optional) Deploying Backend & Supabase:
- **Backend**: You can deploy the `backend/` directory for free on [Render](https://render.com) or [Railway](https://railway.app). Set environment variable `PORT=5000`.
- **Supabase**: If you want her birthday wishes saved in the cloud:
  1. Create a free project at [supabase.com](https://supabase.com).
  2. Paste the SQL from `backend/supabase_schema.sql` into the Supabase SQL Editor.
  3. Copy your Project URL & Anon Key into `backend/.env`.
