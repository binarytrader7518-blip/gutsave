# Gut Save — Deployment, SEO & Bing Report

## Deploy (Vercel)

1. Upload this folder as the project root (static, no build command). `vercel.json` makes `/order` serve `order.html` and turns `/go/2`, `/go/3`, `/go/6` into server-side 302 redirects to the affiliate URL. Any other `/go/*` path returns 404, so it can't be used as an open redirect.
2. Point the project to `en-gutsave.vercel.app`.
3. After it goes live, check that `/key.txt`, `/sitemap.xml` and `/robots.txt` return 200, and that `/go/6` redirects.
4. Run `node scripts/indexnow-submit.mjs` to notify IndexNow about every sitemap URL. Run it again after any material content change, passing only the changed URLs.

## Bing Webmaster Tools checklist

- Add the site `https://en-gutsave.vercel.app/` → verify it (import from Google Search Console, or use the meta tag or XML file that Bing gives you).
- Sitemaps → submit `https://en-gutsave.vercel.app/sitemap.xml`.
- URL Submission → paste the sitemap URL list.
- URL Inspection → check `/`, `/price.html` and `/product-review.html`.
- IndexNow → confirm that submissions appear. A 200 or 202 response means the URLs were received, **not** that they are indexed.
- Monitor Crawl errors, Index coverage and Search performance weekly.

## IndexNow

- API key: `32474f21809d6c8f85d13eca0bb36e55`
- Key file: https://en-gutsave.vercel.app/key.txt

## SEO titles & descriptions

| URL | Title | Chars | Description chars | Indexed |
|---|---|---|---|---|
| / | Gut Save | Gut Health & Digestion Supplement | 44 | 154 | yes |
| /product-overview.html | What Is Gut Save? | Ingredients & Formula | 41 | 151 | yes |
| /how-it-works.html | How Gut Save Works | Daily Gut Support Routine | 46 | 142 | yes |
| /benefits.html | Gut Save Benefits | Digestion & Gut Comfort | 43 | 155 | yes |
| /focus-areas/index.html | Gut Save Focus Areas | Gut Lining to Microbiome | 47 | 146 | yes |
| /focus-areas/gut-lining-support.html | Gut Save for Gut Lining Support | Focus Area | 44 | 132 | yes |
| /focus-areas/regularity.html | Gut Save for Regularity | Focus Area | 36 | 124 | yes |
| /focus-areas/microbiome-balance.html | Gut Save for Microbiome Balance | Focus Area | 44 | 132 | yes |
| /focus-areas/bloating-comfort.html | Gut Save for Bloating Comfort | Focus Area | 42 | 130 | yes |
| /reviews.html | Gut Save Reviews | Ratings, Guarantee & Quality | 47 | 140 | yes |
| /faq.html | Gut Save FAQ | Ingredients, Dosage & Shipping | 45 | 145 | yes |
| /blog/index.html | Gut Save Blog | Gut Health Guides & Tips | 40 | 151 | yes |
| /blog/probiotic-strains-explained.html | Lactobacillus & Bifidobacterium Strains Explained | 49 | 119 | yes |
| /blog/colostrum-gut-lining.html | Colostrum and the Gut Lining: The Research | 42 | 124 | yes |
| /blog/lions-mane-gut-microbiome.html | Lion's Mane Mushroom and Gut Health Research | 44 | 122 | yes |
| /blog/regularity-habits.html | 9 Everyday Habits That Support Regularity | 41 | 118 | yes |
| /blog/bloating-triggers.html | Why Do I Feel Bloated? Triggers and Fixes | 41 | 112 | yes |
| /blog/black-cumin-papaya-seed.html | Black Cumin & Papaya Seed for Digestion | 39 | 111 | yes |
| /product-review.html | Gut Save Review | Is It Legit and Does It Work? | 47 | 141 | yes |
| /price.html | Gut Save Price | Packages, Shipping & Deals | 43 | 139 | yes |
| /where-to-buy.html | Where to Buy Gut Save | How to Order Safely | 43 | 140 | yes |
| /pros-and-cons.html | Gut Save Pros and Cons | Balanced Review | 40 | 154 | yes |
| /alternatives.html | Gut Save Alternatives | Compare Gut Health Options | 50 | 148 | yes |
| /order.html | Order Gut Save | Choose Your Package | 36 | 141 | noindex |
| /affiliate-disclosure.html | Affiliate Disclosure | Gut Save | 31 | 137 | yes |
| /privacy-policy.html | Privacy Policy | Gut Save | 25 | 138 | yes |
| /terms-and-conditions.html | Terms and Conditions | Gut Save | 31 | 143 | yes |
| /supplement-disclaimer.html | Supplement Disclaimer | Gut Save | 32 | 130 | yes |
| /404.html | Page Not Found | Gut Save | 25 | 79 | noindex |

## Keyword map

| Keyword | Target page | Intent | Priority |
|---|---|---|---|
| Gut Save | / | Navigational | High |
| Buy Gut Save | /order (via /price.html) | Transactional | High |
| Where to buy Gut Save | /where-to-buy.html | Transactional | High |
| Gut Save price | /price.html | Commercial | High |
| Gut Save discount / deals | /price.html | Commercial | Medium |
| Gut Save review(s) | /product-review.html, /reviews.html | Commercial investigation | High |
| Is Gut Save legit | /product-review.html | Commercial investigation | High |
| Does Gut Save work | /product-review.html | Commercial investigation | High |
| Gut Save pros and cons | /pros-and-cons.html | Commercial investigation | Medium |
| Gut Save complaints | /product-review.html#complaints | Informational | Medium |
| Gut Save official website | /where-to-buy.html | Navigational | High |
| Gut Save ingredients | /product-overview.html | Informational | High |
| Gut Save alternatives | /alternatives.html | Commercial investigation | Medium |
| Gut Save how to take | /how-it-works.html | Informational | Medium |
| gut health supplement / probiotic strains / colostrum gut lining | /blog/* | Informational | Medium |

No search-volume figures are claimed. Track real queries in Bing Webmaster Tools → Search Performance.

## Scientific references (all checked on 2026-11-25)

| Agency / institution | Title | Ingredient | Type | URL |
|---|---|---|---|---|
| NIH · National Center for Complementary and Integrative Health (NCCIH) | Probiotics: Usefulness and Safety | Lactobacillus & Bifidobacterium strains | US Government Health Resource | https://www.nccih.nih.gov/health/probiotics-what-you-need-to-know |
| NIH · Office of Dietary Supplements (ODS) | Probiotics — Fact Sheet for Health Professionals | Lactobacillus & Bifidobacterium strains | NIH Research Summary | https://ods.od.nih.gov/factsheets/Probiotics-HealthProfessional/ |
| NIH · National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) | Constipation | Regularity (all ingredients) | US Government Health Resource | https://www.niddk.nih.gov/health-information/digestive-diseases/constipation |
| NIH · National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) | Gas in the Digestive Tract | Bloating & gas comfort | US Government Health Resource | https://www.niddk.nih.gov/health-information/digestive-diseases/gas-digestive-tract |
| US Food and Drug Administration (FDA) | Dietary Supplements | All ingredients | FDA Guidance | https://www.fda.gov/food/dietary-supplements |
| NIH · National Library of Medicine (PubMed Central) | Colostrum Therapy for Human Gastrointestinal Health and Disease | Colostrum Powder | Peer-Reviewed Review | https://pmc.ncbi.nlm.nih.gov/articles/PMC8228205/ |
| NIH · National Library of Medicine (PubMed) | Bovine Colostrum in Increased Intestinal Permeability in Healthy Athletes and Patients: A Meta-Analysis of Randomized Clinical Trials | Colostrum Powder | Peer-Reviewed Meta-Analysis | https://pubmed.ncbi.nlm.nih.gov/38361147/ |
| NIH · National Library of Medicine (PubMed Central) | Hericium erinaceus, a medicinal fungus with a centuries-old history: Evidence in gastrointestinal diseases | Organic Lion's Mane Powder | Peer-Reviewed Review | https://pmc.ncbi.nlm.nih.gov/articles/PMC10280799/ |
| NIH · National Library of Medicine (PubMed) | Influence of Short-Term Consumption of Hericium erinaceus on Serum Biochemical Markers and the Changes of the Gut Microbiota: A Pilot Study | Organic Lion's Mane Powder | Human Pilot Study | https://pubmed.ncbi.nlm.nih.gov/33800983/ |
| NIH · National Library of Medicine (PubMed Central) | Gastrointestinal effects of Nigella sativa and its main constituent, thymoquinone: a review | Black Cumin Seed Extract | Peer-Reviewed Review | https://pmc.ncbi.nlm.nih.gov/articles/PMC4884214/ |
| NIH · National Library of Medicine (PubMed) | Collagen peptides ameliorate intestinal epithelial barrier dysfunction in immunostimulatory Caco-2 cell monolayers via enhancing tight junctions | Fish Collagen Peptides | Laboratory (Cell) Study | https://pubmed.ncbi.nlm.nih.gov/28174772/ |
| NIH · National Library of Medicine (PubMed Central) | Nutraceutical Potential of Carica papaya in Metabolic Syndrome | Papaya Seed Powder | Peer-Reviewed Review | https://pmc.ncbi.nlm.nih.gov/articles/PMC6682863/ |

The NCCIH, NIDDK (×2), FDA and ODS pages were fetched to confirm they exist and to check their titles. The PubMed and PMC articles were confirmed through search results that show their titles.

## Structured data

- Every page: Organization and WebSite schema on the home page; BreadcrumbList on inner pages.
- Product with an AggregateOffer ($158–$294, 3 offers). Each Offer includes shipping details and a 60-day return policy (returned by mail).
- FAQPage on /faq.html and the home page (only questions shown on the page). Article schema on blog posts.
- **No aggregateRating or Review markup.** The seller doesn't publish verifiable reviews or a numeric rating. `offers` meets Google's product rich-result requirement.