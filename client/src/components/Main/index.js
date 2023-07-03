import "./index.css";
import { chatgptResponse, profileImageLink } from "../../fixtures";
import ChatItem from "../ChatItem";

const Main = ({ question }) => {
  return (
    <div className="main">
      <ChatItem imageLink={profileImageLink} text={question} />
      <ChatItem imageLink="/images/gpt.png" text={chatgptResponse} />
    </div>
  );
};

export default Main;
