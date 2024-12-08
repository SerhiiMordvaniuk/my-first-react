
import { useState } from "react";
// import { build } from "vite";


// const App = () => {
//   const [click, lalala] = useState(0)
//   const [txt, setTxt] = useState(false)
//   const tututu = () => {
//     lalala(click + "2")
//   }
//   const showTxt = () => {
//     setTxt(!txt)
//   }
//   return (
//     <>
//       <button onClick={tututu}> {click}</button>
//       <button onClick={showTxt}>{txt ? "Призовати" : "выдкрити"}</button>
//       <p>{ txt? `Lorem` : ""}</p>
//     </>
//   )
// };

// const ClickCounter = ({value, onUpdate}) => {
// 	return <button onClick={onUpdate}>Current: {value}</button>
// };

// const App = () => {
// 	const [clicks, setClicks] = useState(0);

// 	const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
// 			<ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// }





// const ClickCounter = ({ value, onUpdate }) => {

//   return     <button onClick={onUpdate}>Value:{value}</button>
  
// };


// const App = () => {
//   const [clicks, setClicks] = useState(10);
  
//   const handleClicks = () => {
//     setClicks(clicks + 1)
//   };
  
//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClicks} />
//       <ClickCounter value={clicks} onUpdate={handleClicks} />
//       <ClickCounter value={clicks} onUpdate={handleClicks} />

      
//     </>
//   )
// };




const App = () => {
  const [values, setValues] = useState({
    x: 0,
    y: 0,
	  });
	
	const updateX = () => {
			setValues({
			...values,
			x: values.x + 1
		});
	};

	const updateY = () => {
		setValues({
			...values,
			y: values.y + 1
		});
	};

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>

      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
    </div>
  );
};



export default App


