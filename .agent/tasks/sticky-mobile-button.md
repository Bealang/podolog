# Task: Implement Sticky Mobile Reservation Button

Move the "Zarezerwuj wizytę" button from the mobile menu to a persistent sticky bottom position on all pages.

## Status
- [x] Create sticky button component/snippet
- [x] Update `index.html`
- [x] Update `about.html`
- [x] Update `contact.html`
- [x] Update `treatments.html`
- [x] Update `hand-treatments.html`
- [x] Update `disinfection.html`
- [x] Update `sterilization.html`
- [x] Update `menu_oferta.html`
- [x] Final verification

## Design Specs
- **Position**: `fixed bottom-0 left-0 w-full`
- **Visibility**: Mobile only (`md:hidden`)
- **Z-index**: High enough to be above all content but below the mobile menu if possible (or above if it should be "always" visible). The mobile menu is `z-[200]`. If it should be *always* visible, `z-[250]`.
- **Styling**: 
    - No margins.
    - Border radius: top-left and top-right only.
    - Color: `bg-emerald-800` (consistent with existing mobile button).
    - Shadow: Subtle top shadow for depth.
- **Action**: `onclick="openProassist()"`
