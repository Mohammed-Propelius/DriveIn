import { Box, Typography } from "@mui/material";
import React from "react";
import Status from "./Status";

const Chip = ({ title, status, active, handleClick }) => {
  return (
    <>
      <Box id="box-chip" sx={{ position: "relative", marginTop: "17px" }}>
        <Status status={status} active={active}  />
        <Box
          sx={{
            minWidth: "82px",
            height: "44px",
            backgroundColor: active ? "#008350" : "#E2E2E2",
            borderRadius: "30px",
          }}
          onClick={() => handleClick()}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "13px",
              lineHeight: "18px",
              textAlign: "center",
              color: active ? "#fff" : "#222",
              padding: "13px 18px",
              textTransform: "capitalize",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Chip;
