import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ButtonSecondary = ({ handleClick }) => {
  return (
    <Box>
      <Box sx={{ textAlign: "center", marginTop: "7px" }}>
        <Button
          sx={{ color: "#008350", border: "1px solid #008350" }}
          variant="contained"
          onClick={handleClick}
        >
          <Typography
            sx={{ fontWeight: "700", fontSize: "12px", padding: "8px 10px" }}
          >
            Skip to the Next Section
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ButtonSecondary;
