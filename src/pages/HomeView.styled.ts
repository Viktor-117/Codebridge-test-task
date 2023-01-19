import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// import "@fontsource/montserrat/300.css";
// import "@fontsource/montserrat/400.css";
// import "@fontsource/montserrat/500.css";
// import "@fontsource/montserrat/700.css";

export const Container = styled.div`
  margin: 75px auto;
  width: 1290px;
`;

export const FilterField = styled(TextField)`
  width: 600px;
  height: 50px;
  padding-top: 13px;
  padding-bottom: 13px;
`;

export const Text = styled(Typography)`
  font-family: "montserrat";
`;
