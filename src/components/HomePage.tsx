import type { FC } from "react";

export const HomePage: FC = () => (
	<div className="home-page">
		<main className="home-canvas">
			<section className="identity-mark" aria-labelledby="home-title">
				<h1 id="home-title">CS</h1>
				<div className="identity-copy">
					<div>
						<b>CAELIN SUTCH</b>
						<span>IS</span>
					</div>
					<p>
						AN ENGINEER AT THE NATIONAL DESIGN STUDIO. PREVIOUSLY FOUNDER OF
						LOOKBK. BASED IN WASHINGTON, DC.
					</p>
					<div>
						<span>ENGINEERING / DESIGN</span>
						<span>01</span>
					</div>
				</div>
				<div className="identity-symbols" aria-hidden="true">
					<span>↻</span>
					<span>▦</span>
				</div>
			</section>

			<nav className="home-links" aria-label="Primary navigation">
				<a href="/blog">Writing</a>
				<a href="mailto:hello@caelinsutch.com">Contact</a>
				<a
					href="https://www.linkedin.com/in/caelinsutch"
					target="_blank"
					rel="noreferrer"
				>
					LinkedIn
				</a>
			</nav>

			<p className="home-footer">
				NATIONAL DESIGN STUDIO / PREVIOUSLY LOOKBK / WASHINGTON, DISTRICT OF
				COLUMBIA
			</p>
		</main>
	</div>
);
