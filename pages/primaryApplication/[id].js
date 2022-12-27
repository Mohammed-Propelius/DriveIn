import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PrimaryApplication from "../../src/components/PrimaryApplication";
import { userInformation } from "../../src/redux/Slice/userDataSlice";

export async function getServerSideProps() {
  const res = await axios.get(
    "https://9504fba6-d1ff-44a8-82a8-364b659e6416.mock.pstmn.io/test"
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
      <PrimaryApplication getUserData={props.getUserData}/>
    </div>
  );
};

export default primaryApplication;
