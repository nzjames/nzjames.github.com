//npx playwright test glitch
// invokes in the glitch dir.
// TODO abstract `_glitch` & `_glitch/screenshot` target strings.
import { test, expect } from "@playwright/test";

const host = "http://localhost";
const port = "8099";

test("crawl glitch posts", async ({ request, page }) => {

  const glitchPaperUrl = `${host}:${port}/glitch-paper.html`;
  const dataUrl = `${host}:${port}/glitch.json`;
  const testData = await (await request.get(dataUrl)).json();

  console.log(testData);

  for (let i=0; i < testData.posts.length; i +=1) {
    const item = testData.posts[i];
    const url = `${host}:${port}${item.pageUrl}`;
    console.log(url);
    await page.goto( url);
    await page.screenshot({ path: `_glitch/screenshot/${item.title}.png` });

		// Update the glitch-paper.html
		// to export-svg and add download-button,
		// to export-png and add a download button.
		// use playwright to request both.
		await page.goto(`${glitchPaperUrl}?img=_glitch/screenshot/${item.title}.png&title=${item.title}`)
		//await page.waitForTimeout(3000);
    //await page.screenshot({ path: `_glitch/screenshot/paper-${item.title}.png` });

  };
});
