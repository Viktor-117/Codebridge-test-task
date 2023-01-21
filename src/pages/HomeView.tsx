// import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { Container } from "./HomeView.styled";

const theme = createTheme({ spacing: 10 });

const HomeView: React.FC = () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        {/* <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: 600 },
          }}
          noValidate
          autoComplete="off"
        > */}
        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: "Montserrat",
            fontSize: 16,
            lineHeight: 1.25,
            marginBottom: "10px",
            //   margin: 2,
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {/* </Box> */}
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
          Results:
        </Typography>
      </ThemeProvider>
    </Container>
  );
};

export default HomeView;
