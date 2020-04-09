import dynamic from "next/dynamic";
import User from "../components/User";

const Auth = dynamic(() => import("../components/Auth"), {
  ssr: false,
});

const testAuth = () => (
  <Auth>
    <User />
  </Auth>
);

export default testAuth;
