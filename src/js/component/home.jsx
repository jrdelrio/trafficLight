import React, { useState } from "react";
import Light from "./light.jsx"

const Home = () => {
	
	const [selectedColor, setSelectedColor] = useState("");

	const setSelectedFunction = (fut_col) => {
		setSelectedColor(fut_col)
	}

	
	return (
		<div className="text-center">
			<div className="tl-hanger"></div>
				<div className="tl-body">

					<Light color='red' class="r-light" var={selectedColor} setVar={setSelectedFunction} />
					<Light color='yellow' class="y-light" var={selectedColor} setVar={setSelectedFunction} />
					<Light color='green' class="g-light" var={selectedColor} setVar={setSelectedFunction} />

			</div>
		</div>
		
	);
};

export default Home
