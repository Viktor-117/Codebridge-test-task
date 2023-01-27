import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button, Arrow, DateText, DateImg } from "./ArticleCard.styled";
import arrow from "images/arrow.svg";
import date from "images/date.svg";
import { dateText, Title, Text } from "./articleProcessing";

export interface ArticleProps {
  id: number;
  filter: string;
  imageUrl: string;
  title: string;
  summary: string;
  publishedAt: string;
}

const ArticleCard: React.FC<ArticleProps> = ({
  id,
  filter,
  imageUrl,
  title,
  summary,
  publishedAt,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articles/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" height="140" image={imageUrl} alt={title} />
        <CardContent sx={{ padding: "25px", paddingBottom: 0 }}>
          <DateImg src={date} alt="date" />
          <DateText>{dateText(publishedAt)}</DateText>
          <Title title={title} filter={filter} />
          <Text text={summary} filter={filter}></Text>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ padding: 0 }}>
        <Button onClick={handleClick}>
          Read more <Arrow src={arrow} alt="arrow" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
