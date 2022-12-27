import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineCamera, AiOutlineCloudUpload } from "react-icons/ai";
import { useSelector } from "react-redux";
import Divider from "./ui/Divider";
const DataField = ({ getDocs }) => {
  const router = useRouter();
  const { id } = router.query;
  const docsFields = useSelector((state) => state.userDataInfo.requiredDocs);
  const fields = getDocs?.verifications;
  console.log(getDocs?.verifications, "props -->");
  const activeField = Object.values(fields).find((fieldsActive) =>
    console.log(fieldsActive, "acc")
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
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          lineHeight: "21px",
                        }}
                      >
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
