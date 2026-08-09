import type { FC } from "react";

export const NotFound: FC = () => (
	<div className="home-page">
		<main className="home-canvas">
			<section className="identity-mark">
				<h1 aria-label="Page not found">NF</h1>
				<div className="identity-copy">
					<div>
						<b>ERROR 404</b>
						<span>IS</span>
					</div>
					<p>THE PAGE YOU REQUESTED COULD NOT BE FOUND.</p>
					<div>
						<span>CAELIN SUTCH</span>
						<span>404</span>
					</div>
				</div>
			</section>
			<nav className="home-links" aria-label="Error navigation">
				<a href="/">Index</a>
				<a href="/blog">Writing</a>
				<a href="mailto:hello@caelinsutch.com">Contact</a>
			</nav>
		</main>
	</div>
);
