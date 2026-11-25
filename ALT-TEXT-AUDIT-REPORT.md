# ALT-TEXT-AUDIT-REPORT — Gut Save

Site: https://en-gutsave.vercel.app/  ·  Audit date: 2026-11-25

## Summary

- HTML pages audited: 29
- Total `<img>` elements checked: 164
- Informative images with descriptive alt text: 158
- Decorative images correctly using `alt=""`: 6 (the floating ingredient illustrations behind the hero bottle, marked `aria-hidden`)
- Images missing alt / generic alt after fixes: 0
- Images corrected during audit: 0 — alt text was written into the page templates during the build, and the first scan found no missing, generic or empty-but-informative alt attributes. (No count is claimed beyond what the scan found.)
- Images added by JavaScript: none (the modal, sticky bar and toast images are in the HTML and were included in the scan).
- CSS background images: none carry meaning (decorative gradients only).
- Raster format: every file in `/img/` was opened with Pillow and confirmed to be genuine WebP (26 files). Ingredient illustrations are SVG vectors.

## Verification

1. Scan 1 — every `<img>` in every built HTML file was parsed and its `alt` checked (missing / empty / generic / too short).
2. Scan 2 — re-run on the final build after the last edit, with the same result, plus a headless-Chrome pass on desktop (1366px) and mobile (390px) across all pages confirming no broken images (`naturalWidth === 0`).
3. Limitation: the files were checked locally on an emulation of the Vercel routing. Re-check on the live domain after deploy (the HTML is identical, so the results should be too).

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
| `/img/ingredients/papaya-seed.svg` | `""` (decorative) |
| `/img/ingredients/lions-mane.svg` | `""` (decorative) |
| `/img/ingredients/probiotics.svg` | `""` (decorative) |
| `/img/ingredients/colostrum.svg` | `""` (decorative) |
| `/img/ingredients/black-cumin.svg` | `""` (decorative) |
| `/img/ingredients/fish-collagen.svg` | `""` (decorative) |
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
