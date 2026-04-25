## 1. Add Floating Donate Button (DONE)

### Implementation in Home.razor

**Position:** Line 396-401 (inside nested divs, but position:fixed anchors to viewport)

**HTML:**
```html
<a href="https://ko-fi.com/kishimahayato" target="_blank" rel="noopener noreferrer"
   class="donate-btn tw:inline-flex tw:items-center tw:gap-3 tw:px-8 tw:py-5 tw:rounded-full tw:text-xl tw:font-bold tw:transition tw:duration-300 tw:cursor-pointer tw:bottom-12 tw:fixed tw:right-15 tw:z-50"
   style="background: linear-gradient(135deg, #29b9f3 0%, #7C3AED 100%); box-shadow: 0 0 20px rgba(41, 185, 243, 0.4);">
    <span class="tw:animate-pulse tw:duration-[800ms]">☕</span>
    <span class="tw:text-white tw:drop-shadow-md">Donate</span>
</a>
```

**CSS (in \<style\> block, line 408-425):**
```css
@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    14% { transform: scale(1.15); }
    28% { transform: scale(1); }
    42% { transform: scale(1.15); }
    70% { transform: scale(1); }
}
.donate-btn:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 0 40px rgba(41, 185, 243, 0.8), 0 0 80px rgba(124, 58, 237, 0.6);
    filter: brightness(1.2);
    animation: heartbeat 0.6s ease-in-out infinite !important;
}
.donate-btn {
    animation: heartbeat 2s ease-in-out infinite;
}
```

### Tasks Status

- [x] 1.1 Add floating donate button HTML in Home.razor after the canvas div
- [x] 1.2 Style button with fixed position (bottom-12, right-15), rounded-full, shadow
- [x] 1.3 Add hover effects (translateY(-4px) scale(1.05), enhanced shadow, heartbeat animation)
- [x] 1.4 Link to ko-fi.com/kishimahayato with target="_blank" rel="noopener noreferrer"

## 2. Verify Implementation

- [x] 2.1 Verify button displays at bottom-right
- [x] 2.2 Verify hover effects work (lift + heartbeat)
- [x] 2.3 Verify link opens in new tab