## Project Summary
A premium, modern beverage brand website for "Honey Ginger Drink", a health-focused drink based in Ghana. The website is designed with a clean, corporate elegance inspired by Diageo, using a color palette of honey yellow and fresh ginger green. It features sections for product storytelling, preparation guides, health benefits, pricing tiers, and partnership opportunities.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS 4
- Icons: Lucide React
- Animations: Framer Motion
- UI Components: Shadcn UI (Radix based)

## Architecture
- `src/app`: Contains the main page and global layout/styles.
- `src/components`: Contains modular sections of the website (Hero, About, Preparation, Benefits, Pricing, Partnership, Contact, Navbar, Footer).
- `src/components/ui`: Contains base UI components like Button, Input, Textarea.

## User Preferences
- Clean, corporate elegance (inspired by diageo.com).
- Primary colors: Honey Yellow (#F4B41A) and Ginger Green (#4A6741).
- Premium African beverage brand aesthetic.
- Photorealistic lifestyle imagery.

## Project Guidelines
- Use `use client` for components with animations or state.
- Maintain a premium feel with subtle animations and hover effects.
- Ensure mobile responsiveness for all sections.
- Use CSS variables for brand colors in `globals.css`.

## Common Patterns
- Framer Motion `motion.div` for entry animations.
- `whileInView` for scroll-triggered reveals.
- Grid layouts for benefits and pricing cards.
