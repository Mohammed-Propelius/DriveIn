import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Footer = () => {
  const userBrand = useSelector(
    (state) => state.userDataInfo.userData.branding
  );
  console.log(userBrand.name);
  return (
    <>
      <Box>
        <Box
          sx={{
            width: "100%",
            height: "90px",
            backgroundColor: "#222222",
            padding: "17px 30px",
          }}
        >
          <Typography
            color="#F7F7F7"
            fontWeight="100"
            textAlign="center"
            fontSize="11px"
          >
            {new Date().getFullYear() + 1} {userBrand?.name}
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
