import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import {FC} from "react";
import dayjs from "dayjs";
import {allArticles, Article} from "contentlayer/generated";
import {ArticleCard} from "@/app/articles/_components/article-card";




export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}


type ArticlesParams =  { params: { slug: string } }

const ArticlesIndex: FC<ArticlesParams> = ({ params }) => {
  const articles = allArticles.sort((a, b) => dayjs(b.date).isBefore(dayjs(a.date)) ? -1 : 1)


  return (
    <SimpleLayout
      title="Writing on company building, product development and AI."
      intro="All of my long and short form thoughts collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}

export default ArticlesIndex