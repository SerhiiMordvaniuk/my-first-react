import Todo from "./Todo/Todo";
import { useState, useEffect } from "react";
import Counter from "./Counter/Counter";
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




// const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
// 	  });
	
// 	const updateX = () => {
// 			setValues({
// 			...values,
// 			x: values.x + 1
// 		});
// 	};

// 	const updateY = () => {
// 		setValues({
// 			...values,
// 			y: values.y + 1
// 		});
// 	};

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };


// const App = () => {
//   const [click, setClicks] = useState(() => {
//     const saveClick = window.localStorage.getItem("keyClick");

//     if (saveClick !== null) {
//       return Number(saveClick)
//     }
//     return 0
//   })


//   const plusClick = () => {
//     setClicks(click +1)
//   }

//   const clear = () => {
//     setClicks(0)
//   }

//   useEffect(() => {
//     window.localStorage.setItem("keyClick", click)
//   }, [click])

//   return (
//    <>
//       <button onClick={plusClick}>Click: {click}</button>
//       <button onClick={clear}>Clear</button>
    
//     </>
//   )
// };

const App = () => {
  

  return (
    <>
    {/* <><Todo></Todo></> */}
    <Counter/>
    </>
  )

}

export default App

 