# ALT-TEXT-AUDIT-REPORT — Gut Save

Site: https://en-gutsave.vercel.app/  ·  Audit date: 2026-11-25 (revision 2)

## Summary

- HTML pages audited: 29
- Total `<img>` elements checked: 164
- Images with descriptive alt text: 164
- Images with missing or empty alt: 0
- Images corrected in this revision: 6. The six floating ingredient images behind the hero bottle on the homepage had `alt=""` (decorative). They now have descriptive alt text, for example "Halved papaya with black seeds, a Gut Save ingredient, behind the Gut Save bottle".
- Also fixed: the inline SVG logo, which appears in the header and footer of every page and as the favicon, now has `role="img"`, `aria-label` and `<title>` ("Gut Save logo"). Decorative UI icons stay `aria-hidden`.
- Decorative images with `alt=""`: 0
- Raster format: all 26 files in `/img/` were verified as genuine WebP. Ingredient illustrations are SVG.

## Verification

1. Scan 1: the source HTML was parsed and every `<img>` checked for a missing, empty or generic `alt` attribute. 0 issues.
2. Scan 2: all 29 pages were rendered in headless Chrome and each `img.getAttribute("alt")` was checked. 164 of 164 have non-empty alt text.
3. Re-check on the live domain after deploy. The HTML is identical, so the results should match.

**Final status: PASSED**

## Page-by-page list

### /404.html

| Image | Alt text |
|---|---|

### /affiliate-disclosure.html

| Image | Alt text |
|---|---|

### /alternatives.html

| Image | Alt text |
|---|---|
| `/img/gut-save-alternatives.webp` | Two Gut Save bottles beside a glass of water and probiotic illustrations |
| `/img/gut-save-3-bottles.webp` | Three bottles of Gut Save digestive support capsules |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /benefits.html

| Image | Alt text |
|---|---|
| `/img/gut-save-benefits-scene.webp` | Three Gut Save bottles with ingredient illustrations |
| `/img/gut-save-review-scene.webp` | Two Gut Save bottles surrounded by ingredient illustrations |
| `/img/gut-save-2-bottles.webp` | 2 bottles of Gut Save for the 2 Bottles package |
| `/img/gut-save-6-bottles.webp` | 6 bottles of Gut Save for the 3 + 3 Bottles package |
| `/img/gut-save-3-bottles.webp` | 3 bottles of Gut Save for the 2 + 1 Bottles package |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /blog/black-cumin-papaya-seed.html

| Image | Alt text |
|---|---|
| `/img/blog-black-cumin-papaya.webp` | Illustration of black cumin seeds and a halved papaya with seeds |
| `/img/blog-probiotic-strains.webp` | Illustration of rod-shaped probiotic bacteria in a petri dish |
| `/img/blog-colostrum-gut-lining.webp` | Illustration of a glass of colostrum beside collagen strands |
| `/img/blog-lions-mane-microbiome.webp` | Illustration of a white lion&#x27;s mane mushroom |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /blog/bloating-triggers.html

| Image | Alt text |
|---|---|
| `/img/blog-bloating-triggers.webp` | Illustration of black cumin seeds beside probiotic bacteria |
| `/img/blog-probiotic-strains.webp` | Illustration of rod-shaped probiotic bacteria in a petri dish |
| `/img/blog-colostrum-gut-lining.webp` | Illustration of a glass of colostrum beside collagen strands |
| `/img/blog-lions-mane-microbiome.webp` | Illustration of a white lion&#x27;s mane mushroom |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /blog/colostrum-gut-lining.html

| Image | Alt text |
|---|---|
| `/img/blog-colostrum-gut-lining.webp` | Illustration of a glass of colostrum beside collagen strands |
| `/img/blog-probiotic-strains.webp` | Illustration of rod-shaped probiotic bacteria in a petri dish |
| `/img/blog-lions-mane-microbiome.webp` | Illustration of a white lion&#x27;s mane mushroom |
| `/img/blog-regularity-habits.webp` | Illustration of a glass of water next to a halved papaya |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /blog/index.html

| Image | Alt text |
|---|---|
| `/img/blog-probiotic-strains.webp` | Illustration of rod-shaped probiotic bacteria in a petri dish |
| `/img/blog-colostrum-gut-lining.webp` | Illustration of a glass of colostrum beside collagen strands |
| `/img/blog-lions-mane-microbiome.webp` | Illustration of a white lion&#x27;s mane mushroom |
| `/img/blog-regularity-habits.webp` | Illustration of a glass of water next to a halved papaya |
| `/img/blog-bloating-triggers.webp` | Illustration of black cumin seeds beside probiotic bacteria |
| `/img/blog-black-cumin-papaya.webp` | Illustration of black cumin seeds and a halved papaya with seeds |
| `/img/gut-save-3-bottles.webp` | Three bottles of Gut Save digestive support capsules |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /blog/lions-mane-gut-microbiome.html

| Image | Alt text |
|---|---|
| `/img/blog-lions-mane-microbiome.webp` | Illustration of a white lion&#x27;s mane mushroom |
| `/img/blog-probiotic-strains.webp` | Illustration of rod-shaped probiotic bacteria in a petri dish |
| `/img/blog-colostrum-gut-lining.webp` | Illustration of a glass of colostrum beside collagen strands |
| `/img/blog-regularity-habits.webp` | Illustration of a glass of water next to a halved papaya |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /blog/probiotic-strains-explained.html

| Image | Alt text |
|---|---|
| `/img/blog-probiotic-strains.webp` | Illustration of rod-shaped probiotic bacteria in a petri dish |
| `/img/blog-colostrum-gut-lining.webp` | Illustration of a glass of colostrum beside collagen strands |
| `/img/blog-lions-mane-microbiome.webp` | Illustration of a white lion&#x27;s mane mushroom |
| `/img/blog-regularity-habits.webp` | Illustration of a glass of water next to a halved papaya |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /blog/regularity-habits.html

| Image | Alt text |
|---|---|
| `/img/blog-regularity-habits.webp` | Illustration of a glass of water next to a halved papaya |
| `/img/blog-probiotic-strains.webp` | Illustration of rod-shaped probiotic bacteria in a petri dish |
| `/img/blog-colostrum-gut-lining.webp` | Illustration of a glass of colostrum beside collagen strands |
| `/img/blog-lions-mane-microbiome.webp` | Illustration of a white lion&#x27;s mane mushroom |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /faq.html

| Image | Alt text |
|---|---|
| `/img/gut-save-3-bottles.webp` | Three bottles of Gut Save digestive support capsules |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /focus-areas/bloating-comfort.html

| Image | Alt text |
|---|---|
| `/img/focus-bloating-comfort.webp` | Black cumin seeds and a glass of water illustrating bloating comfort |
| `/img/gut-save-3-bottles.webp` | Three bottles of Gut Save digestive support capsules |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /focus-areas/gut-lining-support.html

| Image | Alt text |
|---|---|
| `/img/focus-gut-lining-support.webp` | Collagen strands and a glass of colostrum illustrating gut lining support |
| `/img/gut-save-3-bottles.webp` | Three bottles of Gut Save digestive support capsules |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /focus-areas/index.html

| Image | Alt text |
|---|---|
| `/img/focus-gut-lining-support.webp` | Collagen strands and a glass of colostrum illustrating gut lining support |
| `/img/focus-regularity.webp` | Halved papaya and black cumin seeds illustrating digestive regularity |
| `/img/focus-microbiome-balance.webp` | Probiotic bacteria and a lion&#x27;s mane mushroom illustrating microbiome balance |
| `/img/focus-bloating-comfort.webp` | Black cumin seeds and a glass of water illustrating bloating comfort |
| `/img/gut-save-3-bottles.webp` | Three bottles of Gut Save digestive support capsules |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /focus-areas/microbiome-balance.html

| Image | Alt text |
|---|---|
| `/img/focus-microbiome-balance.webp` | Probiotic bacteria and a lion&#x27;s mane mushroom illustrating microbiome balance |
| `/img/gut-save-3-bottles.webp` | Three bottles of Gut Save digestive support capsules |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /focus-areas/regularity.html

| Image | Alt text |
|---|---|
| `/img/focus-regularity.webp` | Halved papaya and black cumin seeds illustrating digestive regularity |
| `/img/gut-save-3-bottles.webp` | Three bottles of Gut Save digestive support capsules |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /how-it-works.html

| Image | Alt text |
|---|---|
| `/img/gut-save-morning-routine.webp` | Gut Save bottle beside a glass of water, ready for the morning dose |
| `/img/gut-save-pros-cons.webp` | Gut Save bottle with papaya and collagen illustrations |
| `/img/gut-save-3-bottles.webp` | Three bottles of Gut Save digestive support capsules |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /index.html

| Image | Alt text |
|---|---|
| `/img/ingredients/papaya-seed.svg` | Halved papaya with black seeds, a Gut Save ingredient behind the Gut Save bottle |
| `/img/ingredients/lions-mane.svg` | White lion's mane mushroom, a Gut Save ingredient behind the Gut Save bottle |
| `/img/ingredients/probiotics.svg` | Rod-shaped probiotic bacteria in a petri dish behind the Gut Save bottle |
| `/img/ingredients/colostrum.svg` | Glass of creamy colostrum, a Gut Save ingredient behind the Gut Save bottle |
| `/img/ingredients/black-cumin.svg` | Black cumin seeds with a pale blue nigella flower behind the Gut Save bottle |
| `/img/ingredients/fish-collagen.svg` | Collagen peptide strands beside a scoop of collagen powder behind the Gut Save bottle |
| `/img/gut-save-bottle.webp` | Gut Save dietary supplement bottle, 30 capsules, with navy and red label |
| `/img/gut-save-bottle-studio.webp` | Gut Save bottle on a marble stand beside a glass of water, a plant and two capsules |
| `/img/focus-gut-lining-support.webp` | Collagen strands and a glass of colostrum illustrating gut lining support |
| `/img/focus-regularity.webp` | Halved papaya and black cumin seeds illustrating digestive regularity |
| `/img/focus-microbiome-balance.webp` | Probiotic bacteria and a lion&#x27;s mane mushroom illustrating microbiome balance |
| `/img/focus-bloating-comfort.webp` | Black cumin seeds and a glass of water illustrating bloating comfort |
| `/img/ingredients/fish-collagen.svg` | Illustration of collagen peptide strands beside a scoop of powder |
| `/img/ingredients/colostrum.svg` | Illustration of a glass of creamy colostrum |
| `/img/ingredients/lions-mane.svg` | Illustration of a white, shaggy lion's mane mushroom |
| `/img/ingredients/papaya-seed.svg` | Illustration of a halved papaya showing its black seeds |
| `/img/ingredients/black-cumin.svg` | Illustration of black cumin seeds with a pale blue nigella flower |
| `/img/ingredients/probiotics.svg` | Illustration of rod-shaped probiotic bacteria in a petri dish |
| `/img/gut-save-benefits-scene.webp` | Three Gut Save bottles with collagen, probiotic, papaya and lion&#x27;s mane illustrations |
| `/img/gut-save-morning-routine.webp` | Gut Save bottle next to a glass of water for the morning routine |
| `/img/gut-save-2-bottles.webp` | 2 bottles of Gut Save for the 2 Bottles package |
| `/img/gut-save-6-bottles.webp` | 6 bottles of Gut Save for the 3 + 3 Bottles package |
| `/img/gut-save-3-bottles.webp` | 3 bottles of Gut Save for the 2 + 1 Bottles package |
| `/img/blog-probiotic-strains.webp` | Illustration of rod-shaped probiotic bacteria in a petri dish |
| `/img/blog-colostrum-gut-lining.webp` | Illustration of a glass of colostrum beside collagen strands |
| `/img/blog-lions-mane-microbiome.webp` | Illustration of a white lion&#x27;s mane mushroom |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles in the 3 + 3 best-value package |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /order.html

| Image | Alt text |
|---|---|
| `/img/gut-save-2-bottles.webp` | 2 bottles of Gut Save for the 2 Bottles package |
| `/img/gut-save-6-bottles.webp` | 6 bottles of Gut Save for the 3 + 3 Bottles package |
| `/img/gut-save-3-bottles.webp` | 3 bottles of Gut Save for the 2 + 1 Bottles package |

### /price.html

| Image | Alt text |
|---|---|
| `/img/gut-save-price-scene.webp` | Six Gut Save bottles with a 60-day money-back seal |
| `/img/gut-save-2-bottles.webp` | 2 bottles of Gut Save for the 2 Bottles package |
| `/img/gut-save-6-bottles.webp` | 6 bottles of Gut Save for the 3 + 3 Bottles package |
| `/img/gut-save-3-bottles.webp` | 3 bottles of Gut Save for the 2 + 1 Bottles package |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /privacy-policy.html

| Image | Alt text |
|---|---|

### /product-overview.html

| Image | Alt text |
|---|---|
| `/img/gut-save-ingredients-overview.webp` | Gut Save bottle surrounded by illustrations of its ingredients |
| `/img/ingredients/fish-collagen.svg` | Illustration of collagen peptide strands beside a scoop of powder |
| `/img/ingredients/colostrum.svg` | Illustration of a glass of creamy colostrum |
| `/img/ingredients/lions-mane.svg` | Illustration of a white, shaggy lion's mane mushroom |
| `/img/ingredients/papaya-seed.svg` | Illustration of a halved papaya showing its black seeds |
| `/img/ingredients/black-cumin.svg` | Illustration of black cumin seeds with a pale blue nigella flower |
| `/img/ingredients/probiotics.svg` | Illustration of rod-shaped probiotic bacteria in a petri dish |
| `/img/gut-save-bottle-marble.webp` | Front view of the Gut Save bottle showing its navy, red and cream label |
| `/img/gut-save-2-bottles.webp` | 2 bottles of Gut Save for the 2 Bottles package |
| `/img/gut-save-6-bottles.webp` | 6 bottles of Gut Save for the 3 + 3 Bottles package |
| `/img/gut-save-3-bottles.webp` | 3 bottles of Gut Save for the 2 + 1 Bottles package |
| `/img/gut-save-3-bottles.webp` | Three bottles of Gut Save digestive support capsules |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /product-review.html

| Image | Alt text |
|---|---|
| `/img/gut-save-bottle-studio.webp` | Gut Save bottle on a marble stand in a bright studio setting |
| `/img/gut-save-2-bottles.webp` | 2 bottles of Gut Save for the 2 Bottles package |
| `/img/gut-save-6-bottles.webp` | 6 bottles of Gut Save for the 3 + 3 Bottles package |
| `/img/gut-save-3-bottles.webp` | 3 bottles of Gut Save for the 2 + 1 Bottles package |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /pros-and-cons.html

| Image | Alt text |
|---|---|
| `/img/gut-save-pros-cons.webp` | Gut Save bottle with papaya and collagen illustrations on a mint background |
| `/img/gut-save-2-bottles.webp` | 2 bottles of Gut Save for the 2 Bottles package |
| `/img/gut-save-6-bottles.webp` | 6 bottles of Gut Save for the 3 + 3 Bottles package |
| `/img/gut-save-3-bottles.webp` | 3 bottles of Gut Save for the 2 + 1 Bottles package |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /reviews.html

| Image | Alt text |
|---|---|
| `/img/gut-save-review-scene.webp` | Two Gut Save bottles surrounded by ingredient illustrations |
| `/img/gut-save-guarantee.webp` | Gut Save bottle beside a gold 60-day money-back guarantee seal |
| `/img/gut-save-2-bottles.webp` | 2 bottles of Gut Save for the 2 Bottles package |
| `/img/gut-save-6-bottles.webp` | 6 bottles of Gut Save for the 3 + 3 Bottles package |
| `/img/gut-save-3-bottles.webp` | 3 bottles of Gut Save for the 2 + 1 Bottles package |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |

### /supplement-disclaimer.html

| Image | Alt text |
|---|---|

### /terms-and-conditions.html

| Image | Alt text |
|---|---|

### /where-to-buy.html

| Image | Alt text |
|---|---|
| `/img/gut-save-where-to-buy.webp` | Three Gut Save bottles with colostrum and black cumin illustrations |
| `/img/gut-save-2-bottles.webp` | 2 bottles of Gut Save for the 2 Bottles package |
| `/img/gut-save-6-bottles.webp` | 6 bottles of Gut Save for the 3 + 3 Bottles package |
| `/img/gut-save-3-bottles.webp` | 3 bottles of Gut Save for the 2 + 1 Bottles package |
| `/img/gut-save-6-bottles.webp` | Six bottles of Gut Save in the 3 + 3 package |
| `/img/gut-save-6-bottles.webp` | Six Gut Save bottles shown together for the best-value package |
