import type { FC } from "react";

interface PostData {
	title: string;
	date: Date;
	description: string;
}
interface Post {
	id: string;
	data: PostData;
}
interface BlogIndexProps {
	posts: Post[];
}

const formatDate = (date: Date): string =>
	date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});

export const BlogIndex: FC<BlogIndexProps> = ({ posts }) => (
	<div className="writing-screen">
		<main className="writing-page">
			<header className="writing-header">
				<section className="writing-mark">
					<h1>WR</h1>
					<div>
						<p>
							<b>WRITING BY CAELIN SUTCH</b>
							<span>IS</span>
						</p>
						<p>AN ARCHIVE OF ESSAYS ON SOFTWARE, PRODUCTS, AND WORK.</p>
						<p>
							<span>WASHINGTON, DC</span>
							<span>{String(posts.length).padStart(2, "0")} ENTRIES</span>
						</p>
					</div>
				</section>
				<nav className="writing-links" aria-label="Writing navigation">
					<a href="/">Index</a>
					<a href="mailto:hello@caelinsutch.com">Contact</a>
					<span>Archive</span>
				</nav>
			</header>

			<section className="archive-list" aria-label="Writing archive">
				<header>
					<span>NO.</span>
					<span>ENTRY</span>
					<span>DATE</span>
				</header>
				{posts.map((post, index) => (
					<article className="archive-row" key={post.id}>
						<span className="post-number">
							{String(index + 1).padStart(2, "0")}
						</span>
						<a href={`/blog/${post.id}`}>
							<h2>{post.data.title}</h2>
							<p>{post.data.description}</p>
						</a>
						<time dateTime={post.data.date.toISOString()}>
							{formatDate(post.data.date)}
						</time>
					</article>
				))}
			</section>
			<footer className="writing-footer">
				CAELIN SUTCH — ENGINEER / PRODUCT DESIGNER — WASHINGTON, DISTRICT OF
				COLUMBIA
			</footer>
		</main>
	</div>
);
