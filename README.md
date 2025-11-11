
# 🎓 Astu Gebeya – Campus Marketplace

A full-stack marketplace platform built for university students to buy, sell, and exchange both new and used items (books, electronics, fashion, gadgets, etc.) safely within campus.
This project promotes convenience, trust, and community-driven trading among students — whether they’re selling pre-owned items or brand-new products.

---

## 🚀 Features

### 🛒 Core Marketplace

* Post item listings with **title, price, image, category, and condition**
* View all items with **filters by category and condition**
* Mark items as **“Sold”** once the deal is done
* “**Books Only**” filter for exam seasons 📚
* View seller details and contact information

### 💬 User Interaction

* Buyers can **message** or **express interest** in listings
* Option to **rate sellers** (for trust building)

### 👤 Authentication

* **Login / Register** with form validation
* Secure session handling
* JWT-based authentication (coming soon)

### 📊 Dashboard

* Personalized **profile dashboard** for students
* Manage posted listings (edit / delete / mark sold)

---

## 🧠 Project Structure

```bash
astu-gebeya/
├── client/                    # Frontend (Next.js + TypeScript)
│   ├── app/
│   │   ├── auth/              # Login & Register pages
│   │   ├── browse/            # Marketplace browsing pages
│   │   ├── categories/        # Category-based filtering
│   │   ├── dashboard/profile/ # User dashboard
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── auth/              # Auth UI components
│   │   ├── marketplace/       # Marketplace UI
│   │   ├── shared/            # Reusable UI (spinner, logo, etc.)
│   │   ├── providers/         # Theme provider setup
│   │   └── ui/                # Reusable UI atoms
│   ├── lib/                   # Utilities, constants, types
│   ├── config/                # Site configuration
│   ├── public/                # Static assets
│   ├── next.config.ts
│   └── tsconfig.json
│
├── server/                    # Backend (Node.js + Express + Prisma)
│   ├── src/                   # Main server source
│   ├── prisma/                # Prisma schema & migrations
│   ├── dist/                  # Compiled server code
│   ├── .env                   # Environment variables
│   ├── nodemon.json
│   ├── docker-compose.yml
│   └── package.json
│
└── README.md
```

---

## 🛠️ Tech Stack

### **Frontend**

* ⚛️ Next.js 15 (App Router)
* 💨 Tailwind CSS
* 🧩 TypeScript
* 🎨 Shadcn/UI + Lucide Icons
* ⚡ Framer Motion (Animations)

### **Backend**

* 🟩 Node.js + Express.js
* 🧠 Prisma ORM
* 🐘 PostgreSQL Database
* 🔐 Better Auth


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/astu-gebeya.git
cd astu-gebeya
```

### 2️⃣ Install Dependencies

#### For Client:

```bash
cd client
npm install
```

#### For Server:

```bash
cd server
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file inside `/server` with:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/astugebeya
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Development Servers

#### Start Backend:

```bash
cd server
npm run dev
```

#### Start Frontend:

```bash
cd client
npm run dev
```

Visit the app at 👉 [http://localhost:3000](http://localhost:3000)

---

## 🧩 Folder Highlights

| Folder                          | Purpose                                                     |
| ------------------------------- | ----------------------------------------------------------- |
| `client/components/marketplace` | Contains hero section, listings grid, and footer components |
| `client/components/shared`      | Common reusable UI (error messages, loading spinner, logo)  |
| `client/lib/utils`              | Utility functions, constants, validators                    |
| `server/prisma`                 | Database schema and migration files                         |
| `server/src`                    | API routes and business logic                               |

---

## 🧪 Future Improvements

* 🔄 Add chat/messaging system for buyers and sellers
* ⭐ Implement seller rating & reviews
* 🧠 Recommendation system based on interests
* 📱 Mobile-first responsive design improvements
* 🛡️ Two-factor authentication

---

