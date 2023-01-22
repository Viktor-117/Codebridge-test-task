import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Link, Arrow, DateText, DateImg } from "./ArticleCard.styled";
import arrow from "images/arrow.svg";
import date from "images/date.svg";
// import { useAppDispatch } from "hooks/hook";

interface ArticleProps {
  imageUrl: string;
  title: string;
  summary: string;
  publishedAt: string;
}

const ArticleCard: React.FC<ArticleProps> = ({
  imageUrl,
  title,
  summary,
  publishedAt,
}) => {
  //   const dispatch = useAppDispatch();
  const shortSummary = () => {
    if (summary.split(" ").length > 25) {
      return summary.split(" ").slice(0, 25).join(" ").concat(" ...");
    } else return summary;
  };

  const shortTitle = () => {
    if (title.split(" ").length > 10) {
      return title.split(" ").slice(0, 10).join(" ").concat(" ...");
    } else return title;
  };

  const dateText = () => {
    const parsedDate: number = Date.parse(publishedAt);
    const date: Date = new Date(parsedDate * 1000);
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    console.log(date);
    const newDate = `${
      month[date.getMonth()]
    } ${date.getDate()} ${date.getFullYear()}`;
    return newDate;
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imageUrl} alt={title} />
        <CardContent sx={{ padding: "25px" }}>
          <DateImg src={date} alt="date" />
          <DateText>{dateText()}</DateText>
          <Typography
            sx={{
              height: 88,
              fontFamily: "Montserrat",
              fontSize: 24,
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {shortTitle()}
          </Typography>
          <Typography
            sx={{
              height: 120,
              fontFamily: "Montserrat",
              fontSize: 16,
              lineHeight: 1.5,
            }}
            variant="body2"
            color="text.secondary"
          >
            {shortSummary()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ padding: 0 }}>
        <Link to="article">
          Read more <Arrow src={arrow} alt="arrow" />
        </Link>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
