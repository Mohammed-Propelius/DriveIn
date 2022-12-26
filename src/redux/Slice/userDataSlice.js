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
    allCollectionUser(state, action) {
      const allCollectionUser = action.payload;
      state.userData = {
        id: allCollectionUser?.id,
        applicationId: allCollectionUser?.applicationId,
        firstName: allCollectionUser?.firstName,
        lastName: allCollectionUser?.lastName,
        email: allCollectionUser?.email,
        phone: allCollectionUser?.phone,
        ssn: allCollectionUser?.ssn,
        dateOfBirth: allCollectionUser?.dateOfBirth,
        type: allCollectionUser?.type,
        verifications: {
          income: {
            active: true,
            status: allCollectionUser.verifications.income.status,
            requiredDocuments: {
              paystub: {
                numRequired:
                  allCollectionUser.verifications.income.requiredDocuments
                    .paystub.numRequired,
                message:
                  allCollectionUser.verifications.income.requiredDocuments
                    .paystub.message,
                status:
                  allCollectionUser.verifications.income.requiredDocuments
                    .paystub.status,
              },
              w2: {
                status:
                  allCollectionUser.verifications.income.requiredDocuments.w2,
              },
              bankStatement: {
                numRequired:
                  allCollectionUser.verifications.income.requiredDocuments
                    .bankStatement.numRequired,
                message:
                  allCollectionUser.verifications.income.requiredDocuments
                    .bankStatement.message,
                status:
                  allCollectionUser.verifications.income.requiredDocuments
                    .bankStatement.status,
              },
            },
          },
          identity: {
            active: false,
            status: allCollectionUser.verifications.identity.status,
            requiredDocuments: {
              driversLicence: {
                status:
                  allCollectionUser.verifications.identity.requiredDocuments
                    .driversLicence.status,
              },
              utilityBill: {
                status:
                  allCollectionUser.verifications.identity.requiredDocuments
                    .utilityBill.status,
              },
              phoneBill: {
                status:
                  allCollectionUser.verifications.identity.requiredDocuments
                    .phoneBill.status,
              },
            },
          },
          residence: {
            active: false,
            status: allCollectionUser.verifications.residence.status,
            requiredDocuments: {
              utilityBill: {
                status:
                  allCollectionUser.verifications.residence.requiredDocuments
                    .utilityBill.status,
              },
            },
          },
          ssn: {
            active: false,
            status: allCollectionUser.verifications.ssn.status,
            requiredDocuments: {
              ssnCard: {
                status:
                  allCollectionUser.verifications.ssn.requiredDocuments.ssnCard,
              },
            },
          },
        },
        branding: {
          type: allCollectionUser.branding.type,
          phone: allCollectionUser.branding.phone,
          latitude: allCollectionUser.branding.latitude,
          longitude: allCollectionUser.branding.longitude,
          name: allCollectionUser.branding.name,
          fullAddress: allCollectionUser.branding.fullAddress,
          logo: allCollectionUser.branding.logo,
          theme: {
            primaryColor: allCollectionUser.branding.theme.primaryColor,
          },
        },
      };
    },

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
