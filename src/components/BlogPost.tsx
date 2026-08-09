import type { FC, ReactNode } from "react";

interface BlogPostProps {
	title: string;
	date: Date;
	children: ReactNode;
}

const formatDate = (date: Date): string =>
	date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

export const BlogPost: FC<BlogPostProps> = ({ title, date, children }) => (
	<div className="article-screen">
		<main className="article-page">
			<article>
				<header className="article-intro">
					<section className="article-mark">
						<div className="article-code" aria-hidden="true">
							TX
						</div>
						<div className="article-id">
							<p>
								<b>WRITTEN BY CAELIN SUTCH</b>
								<span>IS</span>
							</p>
							<h1>{title}</h1>
							<p>
								<span>{formatDate(date)}</span>
								<span>WASHINGTON, DC</span>
							</p>
						</div>
					</section>
					<nav className="article-links" aria-label="Article navigation">
						<a href="/blog">Writing</a>
						<a href="/">Index</a>
						<span>Text</span>
					</nav>
				</header>

				<div className="article-layout">
					<div className="prose">{children}</div>
				</div>
			</article>
			<footer className="article-footer">
				<a href="/blog">← Return to writing</a>
				<span>Caelin Sutch / Washington, DC</span>
			</footer>
		</main>
	</div>
);
