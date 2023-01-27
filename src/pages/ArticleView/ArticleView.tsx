import Article from "components/Article";
import { useAppSelector } from "hooks/hook";
import { useEffect } from "react";
import { useAppDispatch } from "hooks/hook";
import { useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { fetchArticleById } from "redux/operations";
import { ArticleSchema } from "types/types";
import styled from "styled-components";

const LoaderWrap = styled.div`
  text-align: center;
  margin-top: 80px;
`;

const ArticleView: React.FC = () => {
  const dispatch = useAppDispatch();
  const { articleId } = useParams();
  const article = useAppSelector(
    (state) => state.articles.activeArticle
  ) as ArticleSchema;
  const isLoading = useAppSelector((state) => state.articles.isLoading);

  useEffect(() => {
    dispatch(fetchArticleById(articleId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading && (
        <LoaderWrap>
          <RotatingLines strokeColor="#3B8AD9" />
        </LoaderWrap>
      )}
      {article && <Article />}
    </div>
  );
};

export default ArticleView;
