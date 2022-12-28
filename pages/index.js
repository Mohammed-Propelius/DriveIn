import axios from "axios";
import LandingPage from "../src/components/LandingPage";

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
  return (
    <div>
      <LandingPage getUserData={props.getUserData} />
    </div>
  );
}
