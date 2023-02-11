import { createContext, useReducer } from "react";
import ModeReducer from "./modeReducer";

const INITIAL_STATE = {
	darkMode: false,
};

export const ModeContext = createContext(INITIAL_STATE);

export const ModeProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ModeReducer, INITIAL_STATE);

	return (
		<ModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
			{children}
		</ModeContext.Provider>
	);
};
