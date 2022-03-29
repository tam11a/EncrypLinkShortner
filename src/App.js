import React from "react";
import logo from "./logo.svg";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { MdAddLink } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <Paper
      sx={{
        width: "95vw",
        maxWidth: "600px",
        mx: "auto",
        height: { xs: "100vh", md: "95vh" },
        mt: { md: "2.5vh" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
      elevation={15}
    >
      <Box />
      <Box
        sx={{
          width: "fit-content",
          p: 2,
          border: "1px solid",
          borderColor: "primary.dark",
          borderRadius: "50%",
          "& img": {
            height: "90px",
          },
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
      </Box>
      <Box />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/u/*" element={"Finding"} />
          <Route path="*" element={"404 Not Found!!"} />
        </Routes>
      </BrowserRouter>

      <Typography variant={"caption"}>
        Powered By{" "}
        <Typography
          variant={"caption"}
          component={"a"}
          href={"https://tam11a.netlify.app/"}
          target={"_blank"}
          sx={{
            color: "primary.main",
            textDecoration: "none",
          }}
        >
          Tam11a
        </Typography>
        .
      </Typography>
    </Paper>
  );
}

export default App;
