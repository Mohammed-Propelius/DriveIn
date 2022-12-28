import axios from "axios";
import React from "react";
import PrimaryApplication from "../../src/components/PrimaryApplication";

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
  return (
    <div>
      <PrimaryApplication getUserData={props.getUserData} />
    </div>
  );
};

export default primaryApplication;
