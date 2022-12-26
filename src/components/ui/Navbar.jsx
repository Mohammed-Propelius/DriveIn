import React from "react";
import Image from "next/image";
import driveTime from "../../assets/DriveTime_logo 3.svg";
import { Box } from "@mui/material";
import { HiChevronLeft } from "react-icons/hi2";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const arrowStyles = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "10px",
    marginRight: "25px",
  };
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "15px",
      }}
    >
      <Box
        sx={
          router.asPath === "/primaryApplication"
            ? arrowStyles
            : { marginTop: "15px", marginRight: "25px" }
        }
      >
        {router.asPath === "/primaryApplication" ? (
          <Link href="/">
            <HiChevronLeft
              style={{
                width: "24px",
                height: "24px",
                marginLeft: "25px",
                marginTop: "10px",
              }}
            />
          </Link>
        ) : (
          " "
        )}
        <Image src={driveTime} alt="Drive Logo" />
      </Box>
    </Box>
  );
};

export default Navbar;
