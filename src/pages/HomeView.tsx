// import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import { useAppDispatch, useAppSelector } from "hooks/hook";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";
import { Container, Box } from "./HomeView.styled";
import { fetchArticle, fetchFilteredArticle } from "../redux/operations";
import ArticleCard from "components/ArticleCard";

const theme = createTheme({ spacing: 10 });

const HomeView: React.FC = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  const filteredArticles = useAppSelector(
    (state) => state.articles.filteredArticles
  );
  const filtered = useAppSelector((state) => state.articles.filtered);
  const isLoading = useAppSelector((state) => state.articles.isLoading);

  const [value, setValue] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticle());
  }, [dispatch]);

  const handleChange = (e: { target: { value: string } }) => {
    setValue(e.target.value);
    dispatch(fetchFilteredArticle(value));
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: "Montserrat",
            fontSize: 16,
            lineHeight: 1.25,
            marginBottom: "10px",
          }}
        >
          Filter by keywords
        </Typography>
        <TextField
          id="outlined-basic"
          sx={{
            width: 600,
            fontFamily: "Montserrat",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
            borderRadius: "5px",
          }}
          variant="outlined"
          value={value}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: "Montserrat",
            fontSize: 16,
            lineHeight: 1.25,
            marginTop: "40px",
            marginBottom: "45px",
            paddingBottom: "5px",
            borderBottom: "1px solid #EAEAEA",
          }}
        >
          Results: {articles.length}
        </Typography>
        <Box>
          <Suspense>
            {isLoading && <RotatingLines strokeColor="#3B8AD9" />}
            {articles &&
              !filtered &&
              articles.map((article) => {
                return <ArticleCard key={article.id} {...article} />;
              })}
            {filteredArticles &&
              filtered &&
              filteredArticles.map((article) => {
                return (
                  <ArticleCard key={article.id} filter={value} {...article} />
                );
              })}
          </Suspense>
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default HomeView;
