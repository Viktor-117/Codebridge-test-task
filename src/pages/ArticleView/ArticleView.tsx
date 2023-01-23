import Article from "components/Article";
import { useAppSelector } from "hooks/hook";
import { ArticleSchema } from "redux/articleSlice";

const ArticleView: React.FC = () => {
  const article = useAppSelector(
    (state) => state.articles.articleById
  ) as ArticleSchema;

  return <div>{article && <Article />}</div>;
};

export default ArticleView;
