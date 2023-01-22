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
  filter?: string;
  imageUrl: string;
  title: string;
  summary: string;
  publishedAt: string;
}

const ArticleCard: React.FC<ArticleProps> = ({
  filter,
  imageUrl,
  title,
  summary,
  publishedAt,
}) => {
  console.log(filter);
  //   const dispatch = useAppDispatch();
  const shortSummary = () => {
    if (summary.length > 100) {
      return summary.slice(0, 100).concat("...");
    } else return summary;
  };

  const shortTitle = () => {
    if (title.length > 100) {
      const shortTitle = title.slice(0, 100).concat("...");
      if (filter) {
        const filteredTitle = shortTitle.replace(
          filter,
          `<mark>${filter}</mark>`
        );
        console.log(filteredTitle);
        return filteredTitle;
      }
      return shortTitle;
    } else if (filter) {
      const replaceText = `</p><mark>${filter}</mark><p>`;
      const filteredTitle = title.replace(filter, replaceText);
      console.log(filteredTitle);
      return filteredTitle;
    } else return title;
  };

  const dateText = () => {
    const date: Date = new Date(publishedAt);
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
    const day = () => {
      const day = date.getDate().toString();
      switch (day) {
        case "1":
          return day + "st";
        case "2":
          return day + "nd";
        case "3":
          return day + "rd";
        default:
          return day + "th";
      }
    };
    const newDate = `${month[date.getMonth()]} ${day()} ${date.getFullYear()}`;
    return newDate;
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imageUrl} alt={title} />
        <CardContent sx={{ padding: "25px", paddingBottom: 0 }}>
          <DateImg src={date} alt="date" />
          <DateText>{dateText()}</DateText>
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
            {shortTitle()}
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
