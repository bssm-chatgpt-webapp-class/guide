import { HambugIcon, PlusIcon } from "../../icons";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <HambugIcon />
      <div>New chat</div>
      <PlusIcon />
    </div>
  );
};

export default Header;
