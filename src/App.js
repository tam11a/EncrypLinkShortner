import React from "react";
import logo from "./logo.svg";
import { Box, Paper, Typography } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Forwarder from "./component/Forwarder";

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
          p: 4,
          border: "2px solid",
          borderColor: "primary.dark",
          borderRadius: "50%",
          "& img": {
            height: "65px",
          },
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
      </Box>
      <Box />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/u/*" element={<Forwarder />} />
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
