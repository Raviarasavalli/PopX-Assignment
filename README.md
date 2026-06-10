# 🚀 PopX — User Onboarding UI

## ✨ Features

- 🏠 **Welcome Page** — Landing screen with "Create Account" and "Already Registered? Login" CTAs
- 🔐 **Login Page** — Email & password sign-in form with navigation to Account Settings
- 📝 **Register Page** — Full registration form including name, phone, email, password, company, and agency selection
- 👤 **Account Settings Page** — User profile view with avatar, name, email, and bio section
- 🔀 **Client-side Routing** — Seamless navigation powered by React Router DOM (no page reloads)
- 🧩 **Reusable Components** — `Button` (primary/secondary variants) and `Input` (floating label with required indicator)
- 📱 **Mobile-first Design** — Centered, constrained-width layout optimized for mobile viewports

---

## 🗂️ Project Structure

```
popx-assignment/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── Button.jsx       # Reusable button (primary & secondary variants)
│   │   └── Input.jsx        # Floating-label input with required * indicator
│   ├── pages/
│   │   ├── Welcome.jsx      # Landing / home page
│   │   ├── Login.jsx        # Sign-in page
│   │   ├── Register.jsx     # Registration page
│   │   └── AccountSettings.jsx  # User profile settings page
│   ├── App.jsx              # Route configuration (React Router v7)
│   ├── main.jsx             # React app entry point
│   ├── App.css              # App-level styles
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.js           # Vite + Tailwind plugin config
├── eslint.config.js         # ESLint configuration
└── package.json             # Dependencies & scripts
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | ^19.2.6 | UI component library |
| [Vite](https://vite.dev/) | ^8.0.0 | Lightning-fast build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.3.0 | Utility-first CSS framework |
| [React Router DOM](https://reactrouter.com/) | ^7.17.0 | Client-side routing |
| [React Icons](https://react-icons.github.io/react-icons/) | ^5.6.0 | Icon library |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `>= 18.x` — [Download here](https://nodejs.org/)
- **npm** `>= 9.x` (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/popx-assignment.git
   cd popx-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:5173
   ```

---


## 🧭 Application Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Welcome` | Landing page with navigation CTAs |
| `/login` | `Login` | Sign-in form |
| `/register` | `Register` | New account registration form |
| `/AccountSettings` | `AccountSettings` | User profile & settings |
| `*` | `404 Not Found` | Fallback for unknown routes |

---

## 🧩 Reusable Components

### `<Button />`
A flexible button component with two style variants.

```jsx
<Button label="Create Account" onClick={handleRegister} variant="primary" />
<Button label="Already Registered? Login" onClick={handleLogin} variant="secondary" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Button text |
| `onClick` | `function` | — | Click handler |
| `variant` | `"primary" \| "secondary"` | `"primary"` | Visual style variant |

---

### `<Input />`
A floating-label input field with automatic required `*` indicator parsing.

```jsx
<Input label="Full Name *" type="text" placeholder="Enter your full name" />
<Input label="Email Address" type="email" placeholder="Enter email address" />
```

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Label text (append ` *` for required styling) |
| `type` | `string` | HTML input type (text, email, password, tel) |
| `placeholder` | `string` | Placeholder text |
| `value` | `string` | Default value |

---

## 📚 Learning Objectives

This project was built as an assignment to demonstrate:

- ✅ **Conditional Rendering** in React
- ✅ **Component Reusability** with props and variants
- ✅ **React Router DOM** for multi-page navigation
- ✅ **Tailwind CSS** utility classes for rapid styling
- ✅ **Vite** as a modern build tool for React apps

<div align="center">

Made with ❤️ using **React** + **Vite** + **Tailwind CSS**

</div>
