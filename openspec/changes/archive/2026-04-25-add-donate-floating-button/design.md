## Context

Current site is a Blazor WebAssembly SPA displaying social media links in card format on the Home page. All links are organized by platform (YouTube, TikTok, Facebook, Instagram, GitHub, Email) in scrollable sections. Currently no donation option exists.

The project uses:
- Blazor WebAssembly (.NET 9.0) with Vite + Tailwind CSS
- Tailwind v4 for styling
- Floating elements need CSS fixed positioning

## Goals / Non-Goals

**Goals:**
- Add floating donate button fixed to bottom-right of viewport
- Button always visible regardless of scroll position
- Opens Ko-fi page in new tab
- Uses Ko-fi brand color (#29b9f3) enhanced with purple gradient
- Smooth hover effects with heartbeat animation

**Non-Goals:**
- Multiple donate options (only Ko-fi)
- Inline donation modal
- Mobile hide/show toggle (button visible on all devices)

## Decisions

### D1: Button Position
**Decision:** Fixed position with `bottom: 24px` and `right: 30px` (tw:bottom-12, tw:right-15)
**Rationale:** Standard floating button position, avoids covering content, consistent with industry patterns

### D2: Button Styling  
**Decision:** Pill-shaped (rounded-full) button with gradient background and shadow
**CSS Classes:** `tw:inline-flex tw:items-center tw:gap-3 tw:px-8 tw:py-5 tw:rounded-full tw:text-xl tw:font-bold`
**Inline Style:** `background: linear-gradient(135deg, #29b9f3 0%, #7C3AED 100%); box-shadow: 0 0 20px rgba(41, 185, 243, 0.4);`
**Rationale:** Matches existing site aesthetic (cards have rounded corners), gradient adds depth, shadow creates floating effect

### D3: Link opens in new tab
**Decision:** `target="_blank" rel="noopener noreferrer"`
**Rationale:** Standard security practice, keeps user on our site while Ko-fi loads separately

### D4: Button Content
**Decision:** Text "☕ Donate" with coffee emoji
**Rationale:** Ko-fi brand association, clear action, concise

### D5: Animation
**Decision:** Heartbeat keyframes with hover enhancement
**CSS:**
```css
@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    14% { transform: scale(1.15); }
    28% { transform: scale(1); }
    42% { transform: scale(1.15); }
    70% { transform: scale(1); }
}
.donate-btn { animation: heartbeat 2s ease-in-out infinite; }
.donate-btn:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 0 40px rgba(41, 185, 243, 0.8), 0 0 80px rgba(124, 58, 237, 0.6);
    filter: brightness(1.2);
    animation: heartbeat 0.6s ease-in-out infinite !important;
}
```
**Rationale:** Heartbeat provides subtle pulsing effect, hover adds lift + glow for interactivity

## Risks / Trade-offs

- **[Visual conflict]** Button may overlap with other UI elements on small screens → **Mitigation:** Position 24px from bottom, 30px from right provides safe margin
- **[Attention diversion]** Could distract from main content → **Mitigation:** Subtle design (not aggressive colors), only one button