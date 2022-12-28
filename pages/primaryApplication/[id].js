import axios from "axios";
import React from "react";
import PrimaryApplication from "../../src/components/PrimaryApplication";

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
  return (
    <div>
      <PrimaryApplication getUserData={props.getUserData} />
    </div>
  );
};

export default primaryApplication;
