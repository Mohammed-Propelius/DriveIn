import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LandingPage from "../src/components/LandingPage";
import { userInformation } from "../src/redux/Slice/userDataSlice";

export async function getServerSideProps() {
  const res = await axios.get(
    "https://03cabffb-7207-4fe4-b49a-827411215b6d.mock.pstmn.io/test2"
  );
  const response = await res.data;
  return {
    props: { getUserData: response },
  };
}

export default function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userInformation.allCollectionUser(props.getUserData));
  }, []);
  return (
    <div>
      <LandingPage />
    </div>
  );
}
