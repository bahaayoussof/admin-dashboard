import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModeProvider } from "./context/modeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ModeProvider>
			<App />
		</ModeProvider>
	</React.StrictMode>
);
