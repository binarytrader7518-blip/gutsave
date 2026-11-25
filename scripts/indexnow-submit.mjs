// Submit sitemap URLs to IndexNow after a deploy:  node scripts/indexnow-submit.mjs [url ...]
// With no arguments it submits every URL in the live sitemap. Requires Node 18+.
const HOST = "en-gutsave.vercel.app";
const KEY = "32474f21809d6c8f85d13eca0bb36e55";
const KEY_LOCATION = "https://en-gutsave.vercel.app/key.txt";
async function main() {
  let urls = process.argv.slice(2);
  if (!urls.length) {
    const xml = await (await fetch("https://en-gutsave.vercel.app/sitemap.xml")).text();
    urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  }
  urls = [...new Set(urls)].filter(u => u.startsWith("https://en-gutsave.vercel.app/"));
  const key = (await (await fetch(KEY_LOCATION)).text()).trim();
  if (key !== KEY) throw new Error("key.txt on the live site does not match KEY");
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls })
    });
    console.log(`IndexNow response ${res.status} for ${urls.length} URLs (attempt ${attempt})`);
    if (res.status === 200 || res.status === 202) return;
    if (res.status === 400 || res.status === 403 || res.status === 422) { console.error(await res.text()); process.exit(1); }
    await new Promise(r => setTimeout(r, 5000 * attempt));
  }
  process.exit(1);
}
main().catch(e => { console.error(e); process.exit(1); });
