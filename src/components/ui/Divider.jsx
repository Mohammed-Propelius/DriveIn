import { Box, Typography } from "@mui/material";
import React from "react";

const Divider = () => {
  return (
    <Box id="divider" sx={{ marginTop: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "154px", borderTop: "1px solid #161616" }} />
        <Typography sx={{ fontSize: "13px", fontWeight: "700" }}>or</Typography>
        <Box sx={{ width: "154px", borderTop: "1px solid #161616" }} />
      </Box>
    </Box>
  );
};

export default Divider;
