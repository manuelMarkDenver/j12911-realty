'use client'
import "./globals.css";
import MainNavigation from "../components/ui/MainNavigation";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: pink[400],
    },
    secondary: {
      main: pink[800],
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body>
          <header>
            <MainNavigation />
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ThemeProvider>
  );
}
