import axios from "axios";
import LandingPage from "../src/components/LandingPage";

export async function getServerSideProps() {
  const res = await axios.get(
    "https://9504fba6-d1ff-44a8-82a8-364b659e6416.mock.pstmn.io/test"
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
