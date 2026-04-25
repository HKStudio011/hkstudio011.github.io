## ADDED Requirements

### Requirement: Floating Donate Button
The system SHALL display a floating donate button fixed to the bottom-right corner of the viewport on all pages.

#### Scenario: Button visibility
- **WHEN** user visits any page on the site
- **THEN** the donate button is visible fixed at bottom-right corner

#### Scenario: Button position on scroll
- **WHEN** user scrolls the page
- **THEN** the donate button remains fixed at bottom-right corner

#### Scenario: Link opens in new tab
- **WHEN** user clicks the donate button
- **THEN** Ko-fi page opens in a new browser tab

### Requirement: Button Styling
The donate button SHALL use Ko-fi brand color (#29b9f3) enhanced with purple gradient (#7C3AED) and display "☕ Donate" text.

**CSS Properties:**
- Position: fixed, bottom: 24px, right: 30px
- Background: linear-gradient(135deg, #29b9f3 0%, #7C3AED 100%)
- Box-shadow: 0 0 20px rgba(41, 185, 243, 0.4)
- Border-radius: full (pill shape)
- Animation: heartbeat pulse (2s infinite)

#### Scenario: Hover effects
- **WHEN** user hovers over the donate button
- **THEN** button shows: translateY(-4px), scale(1.05), enhanced shadow glow, heartbeat animation speeds up

#### Scenario: Pulse animation
- **WHEN** button is idle
- **THEN** subtle heartbeat animation plays continuously (scale 1 → 1.15 → 1)