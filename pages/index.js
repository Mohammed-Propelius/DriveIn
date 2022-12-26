import LandingPage from "../src/components/LandingPage";
import { useDispatch } from "react-redux";
import userDataSlice, {
  userInformation,
} from "../src/redux/Slice/userDataSlice";
import { useEffect } from "react";
export async function getStaticProps() {
  const data = await fetch(
    "https://ad6a486f-5cdb-4bf2-83bb-e97c231a02e6.mock.pstmn.io/applicant"
  );
  const response = await data.json();
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
