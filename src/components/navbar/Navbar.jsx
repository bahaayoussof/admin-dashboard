import {
	ChatBubbleOutlineOutlined,
	DarkModeOutlined,
	FullscreenExitOutlined,
	LanguageOutlined,
	LightModeOutlined,
	ListOutlined,
	NotificationsNoneOutlined,
	SearchOutlined,
} from "@mui/icons-material";
import "./navbar.scss";
import Avatar from "../../assets/images/avatar.jpg";
import { useContext } from "react";
import { ModeContext } from "../../context/modeContext";

const Navbar = () => {
	const { darkMode, dispatch } = useContext(ModeContext);

	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search..." />
					<SearchOutlined className="icon" />
				</div>
				<div className="items">
					<div className="item">
						<LanguageOutlined className="icon" />
						English
					</div>
					<div
						className="item"
						style={{ cursor: "pointer" }}
						onClick={() => dispatch({ type: "TOGGLE" })}
					>
						{!darkMode ? (
							<DarkModeOutlined className="icon" />
						) : (
							<LightModeOutlined className="icon" />
						)}
					</div>
					<div className="item">
						<FullscreenExitOutlined className="icon" />
					</div>
					<div className="item">
						<NotificationsNoneOutlined className="icon" />
						<div className="counter">1</div>
					</div>
					<div className="item">
						<ChatBubbleOutlineOutlined className="icon" />
						<div className="counter">2</div>
					</div>
					<div className="item">
						<ListOutlined className="icon" />
					</div>
					<div className="item">
						<img src={Avatar} alt="avatar" className="avatar" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
