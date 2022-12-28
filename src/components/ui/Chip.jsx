import { Box, Typography } from "@mui/material";
import React from "react";

const Chip = ({ title, status, active, handleClick }) => {
  return (
    <>
      <Box id="box-chip" sx={{ position: "relative", marginTop: "17px" }}>
        <Box
          sx={{
            width: "10px",
            height: "10px",
            backgroundColor:
              status === "done" || status === "complete"
                ? "#008350"
                : "#D10929",
            borderRadius: "10px",
            position: "absolute",
            top: "-5%",
            right: "5%",
            display: active === title ? "none" : "block",
          }}
        />
        <Box
          sx={{
            minWidth: "82px",
            height: "44px",
            backgroundColor: active === title ? "#008350" : "#E2E2E2",
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
              color: active === title ? "#fff" : "#222",
              padding: "13px 18px",
              textTransform: "capitalize",
            }}
          >
            {title.replace("ssn", "SSN")}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Chip;
