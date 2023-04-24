import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface GameName {
	gameName: string;
}

const GameName = ({ gameName }: GameName) => {
	let game_Name;
	if (gameName === "PC") {
		game_Name = <FaWindows />;
	} else if (gameName === "PlayStation") {
		game_Name = <FaPlaystation />;
	} else if (gameName === "Xbox") {
		game_Name = <FaXbox />;
	} else if (gameName === "Android") {
		game_Name = <FaAndroid />;
	} else if (gameName === "Apple Macintosh") {
		game_Name = <FaApple />;
	} else if (gameName === "Linux") {
		game_Name = <FaLinux />;
	} else if (gameName === "Nintendo") {
		game_Name = <SiNintendo />;
	} else if (gameName === "Web") {
		game_Name = <BsGlobe />;
	} else if (gameName === "iOS") {
		game_Name = <MdPhoneIphone />;
	}

	return <i className="p-1 game_icon">{game_Name}</i>;
};

export default GameName;
