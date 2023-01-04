import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
const root = ReactDOM.createRoot(document.getElementById("root"));
const palette = {
    primary: {
        main: "#009ad9",
    },
    secondary: {
        main: "#39b54a",
    },
};
const theme = createTheme({ palette });
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);



