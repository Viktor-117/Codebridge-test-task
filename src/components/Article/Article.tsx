import { useAppSelector } from "hooks/hook";
import { ArticleSchema } from "types/types";
import {
  Img,
  Header,
  Text,
  Container,
  Box,
  Button,
  Arrow,
} from "./Article.styled";
import arrow from "images/arrow-right.svg";

const Article: React.FC = () => {
  const article = useAppSelector(
    (state) => state.articles.activeArticle
  ) as ArticleSchema;

  const { imageUrl, title, summary } = article;

  return (
    <Box>
      <Img src={imageUrl} alt="article image" />
      <Container>
        <Header>{title}</Header>
        <Text>{summary}</Text>
        <Button to="/">
          <Arrow src={arrow} alt="arrow" />
          Back to homepage
        </Button>
      </Container>
    </Box>
  );
};

export default Article;
