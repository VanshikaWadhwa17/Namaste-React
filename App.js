{/* <div id="parent">
     <div id="child">
         <h1>I'm h1 tag</h1>
         <h2>I'm h1 tag</h2>
       </div>
  <div id="child2">
         <h1>I'm h1 tag</h1>
          <h2>I'm h1 tag</h2>
       </div>
  </div>
 
  ReactElement(Object) => HTML(Browser Understands) */}

  import React from "react";
  import ReactDOM  from "react-dom/client";

  const Title=()=>(
    <h1 className="head" tabIndex="5">
      Namaste React using JSX
    </h1>
  )
//JSX

const HeadingComponent=()=>(
  <>
  <div id="container">
    <Title/>
    <h1 className="heading">functional component</h1>
  </div>
  <div id="container-2"></div>
  </>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);