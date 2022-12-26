import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
const Status = ({ status, active }) => {
  return (
    <Box
      sx={{
        width: "10px",
        height: "10px",
        backgroundColor:
          status === "done" || status === "complete" ? "#008350" : "#D10929",
        borderRadius: "10px",
        position: "absolute",
        top: "-5%",
        right: "5%",
        display: active ? "none" : "block",
      }}
    />
  );
};

export default Status;
