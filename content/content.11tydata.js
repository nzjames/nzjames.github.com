// import { z } from "zod";
// import { fromZodError } from 'zod-validation-error';

export default {
	layout: "layouts/home.njk",
	// eleventyDataSchema: function(data) {
	// 	let result = z.object({
	// 		draft: z.boolean().or(z.undefined()),
	// 	}).safeParse(data);

	// 	if(result.error) {
	// 		throw fromZodError(result.error);
	// 	}
	// },
	// eleventyComputed: {
	// 	permalink: (data) => {
	// 		// Always skip during non-watch/serve builds
	// 		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
	// 			return false;
	// 		}

	// 		return data.permalink;
	// 	},
	// 	eleventyExcludeFromCollections: (data) => {
	// 		// Always exclude from non-watch/serve builds
	// 		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
	// 			return true;
	// 		}

	// 		return data.eleventyExcludeFromCollections;
	// 	}
	// }
};
