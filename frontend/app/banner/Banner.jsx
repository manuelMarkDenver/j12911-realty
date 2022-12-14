"use client";

import { Box, Typography } from "@mui/material";
import React from "react";

import Image from "next/image";
import bannerImg from "../../public/assets/images/banner.jpg";

const Banner = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Image src={bannerImg} style={{ objectFit: "cover", width: "100%", height: "100vh" }} />
      <Box sx={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", background: "pink", opacity: "45%" }}></Box>
    </Box>
  );
};

export default Banner;
