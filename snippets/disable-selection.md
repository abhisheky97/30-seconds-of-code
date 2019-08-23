---
title: Disable selection
tags: interactivity
---

Makes the content unselectable.

```html
<p>You can select me.</p>
<p class="unselectable">You can't select me!</p>
```

```css
.unselectable {
  user-select: none;
}
```

#### Explanation

- `user-select: none` specifies that the text cannot be selected.

#### Browser support

<span class="snippet__support-note">⚠️ Requires prefixes for full support.</span>
<br>
<span class="snippet__support-note">⚠️ This is not a secure method to prevent users from copying content.</span>

- https://caniuse.com/#feat=user-select-none


