import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requiredDocs: {
    bankStatement: "Bank Statement",
    paystub: "Pay Stub",
    w2: "W2",
    driversLicence: "Drivers Licence",
    utilityBill: "Utility Bill",
    phoneBill: "Phone Bill",
    ssnCard: "SSN Card",
  },
};

const userDataSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    resetData(state, action) {
      const chipTags = Object.keys(state.userData.verifications);
      if (chipTags.includes(action.payload.title)) {
        const chipTagData = chipTags.filter(
          (tag) => tag !== action.payload.title
        );
        chipTagData.forEach((tag) => {
          state.userData.verifications[tag].active = false;
        });
        state.userData.verifications[action.payload.title].active = true;
      }
    },
  },
});

export const userInformation = userDataSlice.actions;
export default userDataSlice;
