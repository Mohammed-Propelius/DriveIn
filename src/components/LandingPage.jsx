import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import moneyLend from "../assets/moneyFinalized.svg";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
const LandingPage = ({ getUserData }) => {
  const transformPhoneNumber = (num) => {
    const phoneNumber = num.replace("+1", "");
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const pageParams = Object.keys(getUserData?.verifications).map(
    (documentsReq) => documentsReq
  );

  console.log(pageParams, "PAGE");

  return (
    <Box>
      <Navbar />
      <Box id="main-title">
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "22px",
            fontStyle: "normal",
            marginLeft: "24px",
            marginRight: "32px",
            color: "#222222",
          }}
        >
          Help {getUserData?.branding.name} finalize your application.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={moneyLend} alt="Money Lender" />
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "400",
              size: "16px",
              textAlign: "center",
              marginBottom: "17px",
              marginLeft: "24px",
              marginRight: "24px",
              color: "#222222",
            }}
          >
            Your loan is almost ready! Have your documents ready so that{" "}
            {getUserData?.branding.name} can finalize your loan.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }} id="document-box">
        <Box
          sx={{
            borderRadius: "12px",
            boxSizing: " borderBox",
            border: "2px solid #F6F6F6",
            width: "330px",
            height: "197px",
          }}
        >
          <Box sx={{ marginLeft: "30px" }}>
            <Box
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "30px",
                textAlign: "left",
                padding: "25px 12px",
              }}
            >
              <ul>
                {Object.keys(getUserData?.verifications).map((documentsReq) => (
                  <li
                    key={documentsReq}
                    style={{ textTransform: "capitalize" }}
                  >
                    {documentsReq && documentsReq.replaceAll("ssn", "SSN")}{" "}
                    documents
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Link href={`/primaryApplication/${pageParams[0]}`}>
          <Button
            sx={{
              background: "#008350",
              width: { xs: "320px", sm: "330px" },
              height: "50px",
              marginTop: "17px",
              marginBottom: "14px",
              color: "#fff",
              "&:hover": {
                color: "#000",
                backgroundColor: "#FEFEFE",
              },
            }}
            variant="contained"
          >
            Continue
          </Button>
        </Link>
      </Box>
      <Box id="contact-driver" sx={{ marginBottom: "52px" }}>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "11px",
            lineHeight: "18px",
            textAlign: "center",
            color: "#888888",
            marginBottom: "34px",
            marginLeft: "32px",
            marginRight: "32px",
          }}
        >
          By clicking Continue, I agree to DriveTime Automotive Group Inc.’s{" "}
          <Link href="#" style={{ color: "#008350" }}>
            GLBA Privacy Policy{" "}
          </Link>
          and{" "}
          <Link href="#" style={{ color: "#008350" }}>
            Terms of Use.
          </Link>
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "11px",
            textAlign: "center",
            color: "#888888",
          }}
        >
          Please call {getUserData?.branding.name} if you have any questions
        </Typography>
        <Typography
          sx={{
            color: "#008350",
            fontWeight: "700",
            fontSize: "11px",
            textAlign: "center",
          }}
        >
          {transformPhoneNumber(getUserData?.branding.phone)}
        </Typography>
      </Box>
      <Footer userName={getUserData} />
    </Box>
  );
};

export default LandingPage;