import React from "react"
import "./App.css"

function App() {
	return (
		<section className="bg-yellow">
			<form className="flex-col flex justify-center text-center items-center h-[100vh]">
				<label className=" head text-5xl mb-5 font-semibold">LOGIN</label>
				<div className=" tilt-card flex flex-col p-5 gap-6 md:box-border md:h-[auto] lg:w-[700px] md:w-[700px] md:border-8 md:shadow-2xl ">
					<input
						type="text"
						placeholder="ENTER NAME"
						className="border-4 border-black  ps-6  rounded-xl p-[inherit]"
					/>
					<input
						type="password"
						placeholder="ENTER Pasword"
						className="border-4 border-black ps-6 rounded-xl p-[inherit]  "
					/>
					<div className="space-x-8 space-y-8 text-2xl font-semibold text-white flex flex-col items-end mr-[35px] md:block">
						<button className=" buttn bg-blue-600 rounded-xl ps-4 p-2 pe-4 w-[190px]  ">
							Log-In
						</button>
						<button className="buttn1 bg-blue-600 rounded-xl ps-4 p-2 pe-4 w-[190px] ">
							SIGN-In
						</button>
					</div>
				</div>
			</form>
		</section>
	)
}

export default App
