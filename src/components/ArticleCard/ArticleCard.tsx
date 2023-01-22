import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Link } from "./ArticleCard.styled";
// import { useAppDispatch } from "hooks/hook";

interface ArticleProps {
  imageUrl: string;
  title: string;
  summary: string;
}

const ArticleCard: React.FC<ArticleProps> = ({ imageUrl, title, summary }) => {
  //   const dispatch = useAppDispatch();

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="green iguana"
        />
        <CardContent>
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
            {title}
          </Typography>
          <Typography
            sx={{
              height: 264,
              fontFamily: "Montserrat",
              fontSize: 16,
              lineHeight: 1.5,
              marginBottom: "20px",
            }}
            variant="body2"
            color="text.secondary"
          >
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={Artictle}>Read more</Link>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
