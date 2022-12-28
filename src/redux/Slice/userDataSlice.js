import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    id: "",
    applicationId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    ssn: "",
    dateOfBirth: "",
    type: "",
    verifications: {
      income: {
        status: "",
        requiredDocuments: {
          paystub: {
            numRequired: "",
            message: "",
            status: "",
          },
          w2: {
            status: "",
          },
          bankStatement: {
            numRequired: "",
            message: "",
            status: "",
          },
        },
      },
      identity: {
        status: "",
        requiredDocuments: {
          driversLicence: {
            status: "",
          },
          utilityBill: {
            status: "",
          },
          phoneBill: {
            status: "",
          },
        },
      },
      residence: {
        status: "",
        requiredDocuments: {
          utilityBill: {
            status: "",
          },
        },
      },
      ssn: {
        status: "",
        requiredDocuments: {
          ssnCard: {
            status: "",
          },
        },
      },
    },
    branding: {
      type: "",
      phone: "+",
      latitude: "",
      longitude: "",
      name: "",
      fullAddress: "",
      logo: "",
      theme: {
        primaryColor: "",
      },
    },
  },
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
