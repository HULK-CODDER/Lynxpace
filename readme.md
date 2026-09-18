# ⚡ LYNXPACE

> **All your routes, one hub.**  
> A sleek, high-efficiency dispatch portal built for fast-tracking container tracing, rail terminals, and ocean carrier links.

---

## 🚀 Overview

**Lynxpace** (formerly *Hutch X Links*) is a unified web dashboard designed for logistics operators, dispatchers, and freight coordinators. Instead of managing dozens of bookmarks for terminal portals, detention checkers, and shipline tracking sites, Lynxpace centralizes everything into a high-speed, themeable interface.

---

## ✨ Features

- 🚂 **Major Rail Terminals:** Direct access to CN Brampton Intermodal Terminal and CP Vaughan Intermodal Terminal.
- 🚛 **Intermodal & Off-Dock Yards:** One-click tracking for AMAR Transport, P&W Intermodal, Musket, Best Choice, and Seaports.
- 🚢 **Ocean Carrier Tracing:** Instant navigation for 15+ ocean lines including ONE, MSC, Hapag-Lloyd, CMA CGM, Maersk, COSCO, Evergreen, HMM, and ZIM.
- 💰 **Detention & Rail Billing Portal:** Quick-access sidebar for OOCL, ONE Line, HMM, and SM Line billing and detention platforms.
- 🎨 **Dynamic Theme Engine:** Personalize your workspace with presets like Indigo, Cyberpunk, Gold, Purple Neon, Nord, Sunset, and Cyber.
- 🔔 **Toast Notification System:** Instant visual cues for system alerts and user updates.

---

## 🛠️ Built With

- **HTML5 & CSS3** — Custom layout with CSS variables for dynamic theme switching.
- **Vanilla JavaScript** — Smooth scrolling, responsive sidebar toggles, and direct external routing.

---

## 📁 Project Structure

```text
lynxpace/
├── index.html        # Main dashboard structure & DOM layout
├── global.css        # Theme variables & global scrollbar/toast styling
├── main.css          # Top bar navigation, hero layout, and button states
├── shipline.css      # Carrier grids & 3D button animations
├── side_way.js       # Drawer logic for extra links & detention sites
├── tracing.js        # Direct link arrays for shipline container tracking
├── terminals.js      # External terminal routing logic
└── theme.js          # Theme switching engine
```

---

## ⚡ Quick Start

1. **Clone or Download** the repository to your local computer.
2. Ensure all assets (CSS and JS files) are kept in the same root folder.
3. Open `index.html` in any web browser.

No dependencies, build tools, or server setups required. Just open and go.

---

## 🎮 How to Use

1. **Navigate Quick Links:** Click any item in the top header menu (`HOME`, `SHIPLINES`, `TRACING`, `TERMINALS`) to smoothly auto-scroll to that section.
2. **Access Side Drawer:** Click the **`extra links`** button in the bottom-left corner to open detention and rail billing portals.
3. **Switch Theme:** Click the **`change theme`** button in the bottom-right corner to toggle between visual themes.

---

## 📝 License

Distributed under internal usage guidelines for Hutch Transportation.  
*Copyright © 2016 - Present Hutch Transport.*