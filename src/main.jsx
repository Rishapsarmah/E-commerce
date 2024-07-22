import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import AuthProvider from "./components/AuthProvider/AuthProvider"
import { BrowserRouter as Router } from "react-router-dom"
import AppHeader from "./components/Appheader/Appheader"
import SignUp from "./Pages/SignUp/SignUp"
import SignIn from "./Pages/SignIn/SignIn"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<AuthProvider>
			<Router>
				<App />
			</Router>
		</AuthProvider>
	</React.StrictMode>
)
