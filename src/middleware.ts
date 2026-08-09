import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(({ request }, next) => {
	const url = new URL(request.url);

	if (url.hostname === "www.caelinsutch.com") {
		url.hostname = "caelinsutch.com";
		return Response.redirect(url, 301);
	}

	return next();
});
