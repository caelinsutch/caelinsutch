import {allArticles} from "contentlayer/generated";
import dayjs from "dayjs";
import {ArticleLayout} from "@/components/ArticleLayout";

export const generateStaticParams = async () => allArticles.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allArticles.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allArticles.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <article>
      <ArticleLayout article={post}>
        <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </ArticleLayout>
      {/*<div className="mb-8 text-center">*/}
      {/*  <time dateTime={post.date} className="mb-1 text-xs text-gray-600">*/}
      {/*    {dayjs(post.date).format('MMMM D, YYYY')}*/}
      {/*  </time>*/}
      {/*  <h1 className="text-3xl font-bold">{post.title}</h1>*/}
      {/*</div>*/}
    </article>
  )
}

export default PostLayout