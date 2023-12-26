import {Card} from "@/components/Card";
import dayjs from "dayjs";
import {allArticles, Article} from "contentlayer/generated";

export const ArticleCard = ({ article }: { article: Article }) => (
  <article className="md:grid md:grid-cols-4 md:items-baseline">
    <Card className="md:col-span-3">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="md:hidden"
        decorate
      >
        {dayjs(article.date).format('MMMM D, YYYY')}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
    <Card.Eyebrow
      as="time"
      dateTime={article.date}
      className="mt-1 hidden md:block"
    >
      {dayjs(article.date).format('MMM DD, YYYY')}
    </Card.Eyebrow>
  </article>
);
