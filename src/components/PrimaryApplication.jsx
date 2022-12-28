import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInformation } from "../redux/Slice/userDataSlice";
import DataField from "./DataField";
import ButtonSecondary from "./ui/Button";
import Chip from "./ui/Chip";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

const PrimaryApplication = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const chipData = useSelector(
    (state) => state.userDataInfo.userData.verifications
  );
  const userBrand = useSelector(
    (state) => state.userDataInfo.userData.branding
  );
  const { id } = router.query;

  const transformPhoneNumber = (num) => {
    const phoneNumber = num?.replace("+1", "");
    return `(${phoneNumber?.slice(0, 3)}) ${phoneNumber?.slice(
      3,
      6
    )}-${phoneNumber?.slice(6, 10)}`;
  };

  const getNextSectionIndex = () => {
    const nextSectionIndex =
      (Object.keys(chipData).indexOf(id) + 1) % Object.keys(chipData).length;
    return Object.keys(chipData)[nextSectionIndex];
  };

  const handleClick = (title) => {
    router.push(router.pathname.replace("[id]", title));
  };

  const skipSection = () => {
    const nextSection = getNextSectionIndex();
    router.push(router.pathname.replace("[id]", nextSection));
  };

  return (
    <Box>
      <Navbar />
      <Box id="primary-section">
        <Box id="primary-title" sx={{ marginTop: "15px" }}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "30px",
              marginLeft: "24px",
              marginBottom: "17px",
            }}
          >
            Upload or snap photos of your documents
          </Typography>
        </Box>
        <Box id="chip-section">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4px",
              marginLeft: "24px",
            }}
          >
            {Object.keys(chipData).map((key) => (
              <Chip
                key={key}
                title={key}
                status={chipData[key].status}
                active={id}
                handleClick={() => {
                  handleClick(key, chipData[key].status);
                }}
              />
            ))}
          </Box>
        </Box>
        <Box id="chip-details" sx={{ marginTop: "22px" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#F6F6F6",
              padding: "10px 0px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "15px",
                lineHeight: "23px",
                textTransform: "upperCase",
                marginLeft: "24px",
              }}
            >
              Verify your identity
            </Typography>
          </Box>
        </Box>
        <Box id="personal-details" sx={{ marginTop: "20px" }}>
          <Box sx={{ margin: "0 24px" }}>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "18px",
                letterSpacing: "0.15px",
              }}
            >
              Please upload any one of these document to verify your identity.
            </Typography>

            <Box id="data-fields">
              {/* ---------- DataFields */}
              <DataField />
              {/* ---------- DataFields */}
            </Box>
          </Box>
          <Box id="divider-grey" sx={{ marginTop: "60px" }}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#F6F6F6",
                height: "10px",
              }}
            />
          </Box>
          <Box id="notReady-text" sx={{ paddingTop: "32px" }}>
            <Typography
              sx={{ textAlign: "center", fontWeight: "400", fontSize: "11px" }}
            >
              Not ready? You can upload later
            </Typography>
          </Box>
          {/* ------------ Skip Section --------------- */}
          <ButtonSecondary handleClick={skipSection} />
          {/* ------------ Skip Section --------------- */}
          <Box sx={{ marginTop: "35px", marginBottom: "58px" }}>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "400",
                fontSize: "11px",
                lineHeight: "18px",
              }}
            >
              Call {userBrand.name} if you have any questions
            </Typography>
            <Typography
              sx={{
                color: "#008350",
                fontWeight: "700",
                fontSize: "12px",
                textAlign: "center",
              }}
            >
              {transformPhoneNumber(userBrand.phone)}
            </Typography>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default PrimaryApplication;
