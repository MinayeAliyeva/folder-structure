# Folder Structure in React
src/
│
├── assets/                  # Şəkillər, fontlar, ikonlar, stil faylları (sass, css, less və s.)
│   ├── images/
│   ├── fonts/
│   └── styles/
│       ├── _variables.scss
│       ├── _mixins.scss
│       └── global.scss
│
├── components/              # Reusable və presentational komponentlər (atomic design)
│   ├── UI/                  # Buttons, Inputs, Modals, Icons və s.
│   ├── Layout/              # Header, Footer, Sidebar və s.
│   └── common/              # Digər çox istifadə olunan komponentlər
│
├── features/                # Funksional modullar, hər biri öz sub-folderində (domain-driven)
│   ├── auth/
│   │   ├── components/      # Bu modulun komponentləri
│   │   ├── hooks/           # Xüsusi hooklar
│   │   ├── services/        # API çağırışları, servis funksiyaları
│   │   ├── slices/          # Redux toolkit slice faylları (əgər redux varsa)
│   │   ├── types.ts
│   │   └── index.ts         # Modulun əsas exportları
│   │
│   ├── dashboard/
│   └── profile/
│
├── hooks/                   # Layihə üzrə ümumi custom hooklar
│
├── services/                # API çağırışları, axios konfiqurasiyası, auth servisləri
│   ├── api.ts               # Məsələn, axios instansiyası
│   └── userService.ts
│
├── store/                   # Redux store, slice və middleware-lər
│   ├── slices/              # Redux slices
│   ├── middleware/
│   └── index.ts             # Store konfigurasiya faylı
│
├── routes/                  # React Router konfiqurasiyası və marşrutlar
│   └── index.tsx
│
├── utils/                   # Yardımçı funksiyalar, date formatter, validation və s.
│
├── types/                   # Layihə üzrə TypeScript tipləri, interface-lər
│
├── contexts/                # React kontekstləri (AuthContext, ThemeContext və s.)
│
├── constants/               # Sabitlər (məsələn, URL, status kodları və s.)
│
├── i18n/                    # Tərcümə və lokalizasiya faylları
│
├── App.tsx                  # Əsas App komponenti
├── index.tsx                # ReactDOM renderi və əsas entry point
└── vite-env.d.ts / react-app-env.d.ts
