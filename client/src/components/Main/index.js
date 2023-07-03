import "./index.css";
import { chatgptResponse, profileImageLink } from "../../fixtures";
import ChatItem from "../ChatItem";

const Main = ({ chatMessages }) => {
  return (
    <div className="main">
      {chatMessages.map((item) => {
        return (
          <>
            {item.isMine ? (
              <ChatItem imageLink={profileImageLink} text={item.message} />
            ) : (
              <ChatItem imageLink="/images/gpt.png" text={item.message} />
            )}
          </>
        );
      })}
    </div>
  );
};

export default Main;
