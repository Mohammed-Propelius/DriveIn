import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiChevronLeft } from "react-icons/hi2";
import DriveTime from "../../../public/DriveTime_logo 3.svg";
const Navbar = () => {
  const router = useRouter();
  const { id } = router.query;
  const arrowStyles = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "10px",
    marginRight: "25px",
    color: "#000000",
  };
  const noArrowStyle = {
    display: "flex",
    justifyContent: "right",
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
          router.asPath === `/primaryApplication/${id}`
            ? arrowStyles
            : noArrowStyle
        }
      >
        {router.asPath === `/primaryApplication/${id}` ? (
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
        <Box sx={{ position: "relative", width: "80px", height: "42px" }}>
          <Image src={DriveTime} alt="DriveTime Image" />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
