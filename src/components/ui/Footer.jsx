import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            width: "100%",
            height: "90px",
            backgroundColor: "#000",
            padding: "17px 30px",
          }}
        >
          <Typography
            color="#F7F7F7"
            fontWeight="400"
            textAlign="center"
            fontSize="11px"
          >
            2023 DriveTime
          </Typography>
          <Typography
            color="#F7F7F7"
            fontWeight="700"
            textAlign="center"
            fontSize="11px"
          >
            Contact Us | Term of Use | Privacy Policy
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
