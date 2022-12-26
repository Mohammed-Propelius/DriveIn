import React from "react";
import { Box, Typography } from "@mui/material";
import { AiOutlineCamera, AiOutlineCloudUpload } from "react-icons/ai";
import Divider from "./ui/Divider";
import { useSelector } from "react-redux";
const DataField = () => {
  const docsFields = useSelector((state) => state.userDataInfo.requiredDocs);
  const fields = useSelector(
    (state) => state.userDataInfo.userData.verifications
  );
  const activeField = Object.values(fields).find(
    (fieldsActive) => fieldsActive.active
  );

  return (
    <Box id="data-field--details">
      {activeField?.requiredDocuments &&
        Object.keys(activeField.requiredDocuments).map(
          (doc, amountOfOccurance) => (
            <Box key={amountOfOccurance}>
              <Box sx={{ marginTop: "20px", marginBottom: "12px" }}>
                <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                  Your {docsFields[doc]}
                </Typography>
              </Box>
              <Box id="initial-box">
                <Box
                  sx={{
                    backgroundColor: "#E6E6E6",
                    width: "100%",
                    height: "100%",
                    padding: "20px 16px",
                    borderRadius: "12px",
                    border: "2px dashed #D0D0D0",
                  }}
                >
                  <Box id="wrapper-ids">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>
                        {activeField.requiredDocuments[doc].message
                          ? activeField.requiredDocuments[doc].message
                          : docsFields[doc]}
                      </Typography>
                      <Box sx={{ display: "flex", gap: "10px" }}>
                        <AiOutlineCamera
                          style={{ width: "30px", height: "30px" }}
                        />
                        <AiOutlineCloudUpload
                          style={{ width: "30px", height: "30px" }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {amountOfOccurance <
                Object.keys(activeField.requiredDocuments).length - 1 && (
                <Divider />
              )}
            </Box>
          )
        )}
    </Box>
  );
};

export default DataField;
