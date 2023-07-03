import "./index.css";
import { chatgptResponse, profileImageLink } from "../../fixtures";
import ChatItem from "../ChatItem";

const Main = () => {
  return (
    <div className="main">
      <ChatItem imageLink={profileImageLink} text="코딩 잘하는 법" />
      <ChatItem imageLink="/images/gpt.png" text={chatgptResponse} />
    </div>
  );
};

export default Main;
