//npx playwright test glitch
// invokes in the glitch dir.
// TODO abstract `_glitch` & `_glitch/screenshot` target strings.
import { test, expect } from "@playwright/test";
import { existsSync } from "node:fs";

const host = "http://localhost";
const port = "8099";
const glitchPaperUrl = `${host}:${port}/glitch-paper.html`;

const renderAndShoot = async (page, item, area = "posts") => {
	const url = `${host}:${port}${item.pageUrl}`;
	console.log(url);
	await page.goto(url);
	await page.screenshot({ path: `_glitch/screenshot/${item.fileName}.png` });

	// Update the glitch-paper.html
	// DONE  to export-svg and add download-button,
	// DONE to export-png and add a download button.
	// use playwright to request both.

	const glitchPaperUrlFULL = `${glitchPaperUrl}?img=/screenshot/${item.fileName}.png&fileName=${item.fileName}&title=${item.title}`;
	const glitchFileName = `_glitch/screenshot/paper-${item.fileName}.png`;
	if (!existsSync(glitchFileName)) {
		console.log(glitchPaperUrlFULL);

		await page.goto(glitchPaperUrlFULL);

		await page.waitForTimeout(3000);
		await page.screenshot({
			path: `_glitch/screenshot/paper-${item.fileName}.png`,
		});

		const pngFileName = `content/${area}/img/banner/${item.fileName}.png`;
		const svgFileName = `content/${area}/img/banner/${item.fileName}.svg`;

		if (existsSync(pngFileName)) {
			console.log("HAZ ", pngFileName);
		} else {
			// Start waiting for download before clicking. Note no await.
			const downloadPromise = page.waitForEvent("download");
			await page.getByText("Download PNG").click();
			const download = await downloadPromise;
			// Wait for the download process to complete and save the downloaded file somewhere.
			await download.saveAs(
				`content/${area}/img/banner/` + download.suggestedFilename()
			);
		}

		if (existsSync(svgFileName)) {
			console.log("HAZ ", svgFileName);
		} else {
			// Start waiting for download before clicking. Note no await.
			const downloadPromiseSVG = page.waitForEvent("download");
			await page.getByText("Download SVG").click({ timeout: 50000 });
			const downloadSVG = await downloadPromiseSVG;
			// Wait for the download process to complete and save the downloaded file somewhere.
			await downloadSVG.saveAs(
				`content/${area}/img/banner/` + downloadSVG.suggestedFilename()
			);
		}
	}
};

// todo, test if the file is there.
// 1. identify suggestedFileName...
// .  it should be the title through the slugify function.
test("crawl glitch posts", async ({ request, page }) => {
	test.setTimeout(120000);
	const dataUrl = `${host}:${port}/glitch.json`;
	const testData = await (await request.get(dataUrl)).json();

	for (let i = 0; i < testData.posts.length; i += 1) {
		const item = testData.posts[i];
		await renderAndShoot(page, item);
	}
	await renderAndShoot(page, testData.posts[0]);
});

test("crawl glitch thoughts", async ({ request, page }) => {
	test.setTimeout(120000);
	const dataUrl = `${host}:${port}/glitch.json`;
	const testData = await (await request.get(dataUrl)).json();

	for (let i = 0; i < testData.thoughts.length; i += 1) {
		const item = testData.thoughts[i];
		await renderAndShoot(page, item, "thoughts");
	}
	await renderAndShoot(page, testData.thoughts[0], "thoughts");
});
