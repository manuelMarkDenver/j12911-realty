"use client";

// import localFont from '@next/font/local'

import "./globals.css";
import MainNavigation from "../components/ui/MainNavigation";
import Footer from "../components/ui/Footer";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// const myFont = localFont({ src: './assets/fonts/HelveticaNeue.ttf' })


const theme = createTheme({
  palette: {
    primary: {
      main: "#F6C7C3",
    },
    secondary: {
      main: "#AD948E",
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
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </ThemeProvider>
  );
}
