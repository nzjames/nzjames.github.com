// Run using `npx @11ty/eleventy --config=glitch.eleventy.config.js` until we figure out what is wrong with the npm script invocation
import markdownItAnchor from "markdown-it-anchor";

import { InputPathToUrlTransformPlugin, HtmlBasePlugin } from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

import pluginFilters from "./_config/filters.js";
import metadata from "./_data/metadata.js";
import { siteUrl, feedPrefix } from "./config.js";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
	eleventyConfig.setServerOptions({
		port: 8099,
	});

	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig
		.addPassthroughCopy({
			"./public/": "/",
			"./node_modules/prismjs/themes/prism-okaidia.css":
				"/css/prism-okaidia.css",
			"./glitch/": "/",
		})
		.addPassthroughCopy("./content/feed/pretty-atom-feed.xsl");

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch content images for the image pipeline.
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

	// Per-page bundles, see https://github.com/11ty/eleventy-plugin-bundle
	// Adds the {% css %} paired shortcode
	eleventyConfig.addBundle("css");
	// Do you want a {% js %} bundle shortcode too?
	// eleventyConfig.addBundle("js");

	// Official plugins
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 },
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);


		// Atom Feed
		eleventyConfig.addPlugin(feedPlugin, {
			outputPath: "/feed/feed.xml",
			stylesheet: "pretty-atom-feed.xsl",
			templateData: {},
			collection: {
				name: "home",
				limit: 10,
			},
			metadata: {
				language: "en",
				title: [feedPrefix, metadata.title].filter(Boolean).join(' - '),
				subtitle: "James thinks out loud",
				base: siteUrl,
				author: metadata.author
			},
		});
		// Atom Feed
		eleventyConfig.addPlugin(feedPlugin, {
			outputPath: "/feed/posts.xml",
			stylesheet: "pretty-atom-feed.xsl",
			templateData: {},
			collection: {
				name: "posts",
				limit: 20,
			},
			metadata: {
				language: "en",
				title: [feedPrefix, "Posts", metadata.title].filter(Boolean).join(' - '),
				subtitle: "Posts from #james-thinks-out-loud",
				base: siteUrl,
				author: metadata.author
			},
		});
		// Atom Feed
		eleventyConfig.addPlugin(feedPlugin, {
			outputPath: "/feed/thoughts.xml",
			stylesheet: "pretty-atom-feed.xsl",
			templateData: {},
			collection: {
				name: "thoughts",
				limit: 20,
			},
			metadata: {
				language: "en",
				title: [feedPrefix, "Thoughts", metadata.title].filter(Boolean).join(' - '),
				subtitle: "Thoughts from #james-thinks-out-loud",
				base: siteUrl,
				author: metadata.author
			},
		});


	// Filters
	eleventyConfig.addPlugin(pluginFilters);

	// Customize Markdown library settings:
	eleventyConfig.amendLibrary("md", (mdLib) => {
		mdLib.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.ariaHidden({
				placement: "after",
				class: "header-anchor",
				symbol: "#",
				ariaHidden: false,
			}),
			level: [1, 2, 3, 4],
			slugify: eleventyConfig.getFilter("slugify"),
		});
	});

	// Image optimization: https://www.11ty.dev/docs/plugins/image/#eleventy-transform
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// File extensions to process in _site folder
		extensions: "html",

		// Output formats for each image.
		formats: ["avif", "webp", "auto", "svg"],

		// widths: ["auto"],
		svgShortCircuit: true,

		defaultAttributes: {
			// e.g. <img loading decoding> assigned on the HTML tag will override these values.
			loading: "lazy",
			decoding: "async",
		},
	});

	eleventyConfig.addFilter("stringify", (data) => {
		return JSON.stringify(data, null, "\t");
	});

	eleventyConfig.addShortcode("currentBuildDate", () => {
		return new Date().toISOString();
	});

	eleventyConfig.addShortcode("glitchMap", (context) => {
		console.log(context);
		debugger;
		return new Date().toISOString();
	});

	eleventyConfig.addNunjucksAsyncShortcode(
		"svgIcon",
		async (path, fileName) => {
			return null;
		}
	);
	eleventyConfig.addShortcode("metaImage", async function (path, fileName) {
		return null;
	});
	eleventyConfig.addFilter("formatTag", function (s) {
		return null;
	});
	// Features to make your build faster (when you need them)

	// If your passthrough copy gets heavy and cumbersome, add this line
	// to emulate the file copy on the dev server. Learn more:
	// https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

	// eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

	eleventyConfig.addGlobalData("theme", "glitch");

	eleventyConfig.addCollection("home", function (collectionApi) {
		return collectionApi.getFilteredByGlob([
			"content/posts/*",
			"content/thoughts/*",
		]);
	});
}

export const config = {
	// Control which files Eleventy will process
	// e.g.: *.md, *.njk, *.html, *.liquid
	templateFormats: ["md", "njk", "html", "liquid", "11ty.js"],

	// Pre-process *.md files with: (default: `liquid`)
	markdownTemplateEngine: "njk",

	// Pre-process *.html files with: (default: `liquid`)
	htmlTemplateEngine: "njk",

	// These are all optional:
	dir: {
		input: "content", // default: "."
		includes: "../_includes", // default: "_includes" (`input` relative)
		data: "../_data", // default: "_data" (`input` relative)
		output: "_glitch",
	},

	// -----------------------------------------------------------------
	// Optional items:
	// -----------------------------------------------------------------

	// If your site deploys to a subdirectory, change `pathPrefix`.
	// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

	// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
	// it will transform any absolute URLs in your HTML to include this
	// folder name and does **not** affect where things go in the output folder.

	// pathPrefix: "/",
};
