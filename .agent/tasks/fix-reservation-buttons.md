# Task: Fix Reservation Buttons on About and Contact Pages

The "Zarezerwuj wizytę" (Book Appointment) button in the desktop navigation bar is not working on the "O mnie" (about.html) and "Kontakt" (contact.html) pages because it is missing the `onclick="openProassist()"` attribute.

## Status
- [x] Fix `about.html`
- [x] Fix `contact.html`
- [x] Verify both pages

## Details
In `about.html` and `contact.html`, the button in the `<nav>` section needs to be updated.

### about.html
Location: around line 98
Current:
```html
<button
    class="nav-desktop btn-reserve bg-primary text-on-primary px-6 py-2.5 rounded-md font-label-md">Zarezerwuj
    wizytę</button>
```
Target:
```html
<button onclick="openProassist()"
    class="nav-desktop btn-reserve bg-primary text-on-primary px-6 py-2.5 rounded-md font-label-md cursor-pointer">Zarezerwuj
    wizytę</button>
```

### contact.html
Location: around line 98
Current:
```html
<button
    class="nav-desktop btn-reserve bg-primary text-on-primary px-6 py-2.5 rounded-md font-label-md">Zarezerwuj
    wizytę</button>
```
Target:
```html
<button onclick="openProassist()"
    class="nav-desktop btn-reserve bg-primary text-on-primary px-6 py-2.5 rounded-md font-label-md cursor-pointer">Zarezerwuj
    wizytę</button>
```
