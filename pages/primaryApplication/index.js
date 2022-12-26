import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PrimaryApplication from "../../src/components/PrimaryApplication";
import { userInformation } from "../../src/redux/Slice/userDataSlice";

export async function getStaticProps() {
  const data = await fetch(
    "https://ad6a486f-5cdb-4bf2-83bb-e97c231a02e6.mock.pstmn.io/applicant"
  );
  const response = await data.json();
  return {
    props: { getUserData: response },
  };
}

const primaryApplication = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userInformation.allCollectionUser(props.getUserData));
  }, []);
  return (
    <div>
      <PrimaryApplication />
    </div>
  );
};

export default primaryApplication;
