## Why

Add a floating donate button to the site to allow supporters to easily support via Ko-fi. The button will be fixed at the bottom-right corner of the screen, always visible regardless of scroll position, making it simple for visitors to donate at any time.

## What Changes

- Add floating donate button component fixed to bottom-right of screen
- Button links to `https://ko-fi.com/kishimahayato` opening in new tab
- Styled with Ko-fi brand color (#29b9f3) and hover effects
- Positioned ~24px from right and bottom edges

## Capabilities

### New Capabilities
- `donate-floating-button`: A floating donate button that opens Ko-fi donation page in new tab

### Modified Capabilities
- (none)

## Impact

- Modified: `User Site/Pages/Home.razor` - Add floating button component
- No new dependencies required