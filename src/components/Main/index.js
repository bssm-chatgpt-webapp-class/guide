import "./index.css";
import { profileImageLink } from "../../fixtures";
import ChatItem from "../ChatItem";

const Main = () => {
  return (
    <div className="main">
      <ChatItem imageLink={profileImageLink} text="코딩 잘하는 법" />
      <ChatItem imageLink="/images/gpt.png" text="열심히 하면 된다." />
    </div>
  );
};

export default Main;
