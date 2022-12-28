import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import PrimaryApplication from "../../src/components/PrimaryApplication";
import { userInformation } from "../../src/redux/Slice/userDataSlice";

export async function getServerSideProps() {
  const res = await axios.get(
    "https://03cabffb-7207-4fe4-b49a-827411215b6d.mock.pstmn.io/test2"
  );
  const response = await res.data;
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
