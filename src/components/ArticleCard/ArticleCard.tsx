import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button, Arrow, DateText, DateImg } from "./ArticleCard.styled";
import arrow from "images/arrow.svg";
import date from "images/date.svg";
import { useAppDispatch } from "hooks/hook";
import { fetchArticleById } from "redux/operations";
import { shortSummary, shortTitle, dateText } from "./articleProcessing";

interface ArticleProps {
  id: number;
  filter?: string;
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(fetchArticleById(id));
    navigate(`/articles/:${id}`);
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" height="140" image={imageUrl} alt={title} />
        <CardContent sx={{ padding: "25px", paddingBottom: 0 }}>
          <DateImg src={date} alt="date" />
          <DateText>{dateText(publishedAt)}</DateText>
          <Typography
            sx={{
              height: 117,
              fontFamily: "Montserrat",
              fontSize: 24,
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {shortTitle(title, filter)}
          </Typography>
          <Typography
            sx={{
              height: 72,
              fontFamily: "Montserrat",
              fontSize: 16,
              lineHeight: 1.5,
            }}
            variant="body2"
            color="text.secondary"
          >
            {shortSummary(summary)}
          </Typography>
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
