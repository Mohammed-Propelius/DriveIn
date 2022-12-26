import { Box, Button } from "@mui/material";
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
          Skip to the Next Section
        </Button>
      </Box>
    </Box>
  );
};

export default ButtonSecondary;
