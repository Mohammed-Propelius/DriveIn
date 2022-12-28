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
};

const userDataSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    allCollectionUser(state, action) {
      state.userData = { ...action.payload };
    },
  },
});

export const userInformation = userDataSlice.actions;
export default userDataSlice;
