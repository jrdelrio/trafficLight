import React, { useState } from "react";

const Home = () => {
	
	const [selectedColor, setSelected] = useState("");
	
	return (
		<div className="text-center">
			<div className="tl-hanger"></div>
				<div className="tl-body">

					<div 
					className={`light r-light + ${(selectedColor === 'red')    ? ' glow':''}`} 
					onClick={() => {
						(selectedColor === 'red') ? setSelected("") : setSelected('red');
					}}>
					</div>

					<div 
					className={`light y-light + ${(selectedColor === 'yellow') ? ' glow':''}`} 
					onClick={() => {
						(selectedColor === 'yellow') ? setSelected("") : setSelected('yellow');
					}}>
					</div>

					<div 
					className={`light g-light + ${(selectedColor === 'green')  ? ' glow':''}`} 
					onClick={() => {
						(selectedColor === 'green') ? setSelected("") : setSelected('green');
					}}>
					</div>

			</div>
		</div>
		
	);
};

export default Home;
