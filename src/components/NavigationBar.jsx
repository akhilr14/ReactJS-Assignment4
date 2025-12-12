import { useState } from "react";
import CardWrapper from "./CardWrapper";
import Home from "./Home";
import Portal from "./Portal";
import Form from "./Form";

export default function NavigationBar() {
  const [homeView, setHomeView] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <button
              className="btn btn-outline-primary"
              onClick={() => setHomeView(true)}
              value="home"
            >
              Logo
            </button>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button
              className="btn btn-outline-success mr-sm-2"
              onClick={() => setHomeView(false)}
            >
              List All
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-outline-success"
              onClick={() => setIsOpen(true)}
            >
              Add
            </button>
          </li>
        </ul>
      </nav>
      <div>{homeView ? <Home /> : <CardWrapper />}</div>
      <div>
        <Portal open={isOpen} onClose={() => setIsOpen(false)}>
          <Form />
        </Portal>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// import './App.css'; // Optional: for basic styling

// // 1. Define the Home Page Component
// const HomePage = ({ onViewChange }) => {
//   return (
//     <div>
//       <h1>Welcome Home!</h1>
//       <p>This is your default landing page content.</p>
//       <button onClick={() => onViewChange(false)}>
//         Go to List View
//       </button>
//     </div>
//   );
// };

// // 2. Define the List View Component
// const ListView = ({ onViewChange }) => {
//   // In a real app, you'd fetch data here and map over it to display a list
//   const items = ['Item 1', 'Item 2', 'Item 3'];

//   return (
//     <div>
//       <h1>List of Items</h1>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <button onClick={() => onViewChange(true)}>
//         Go back Home
//       </button>
//     </div>
//   );
// };

// // 3. The Main App Component (Container for Logic)
// function App() {
//   // State to manage which view is active. Default is true (Home Page)
//   const [showHome, setShowHome] = useState(true);

//   // Function passed down as a prop to children components to change the state
//   const handleViewChange = (shouldShowHome) => {
//     setShowHome(shouldShowHome);
//   };

//   return (
//     <div className="App">
//       {/* 4. Conditional Rendering Logic */}
//       {showHome ? (
//         <HomePage onViewChange={handleViewChange} />
//       ) : (
//         <ListView onViewChange={handleViewChange} />
//       )}
//     </div>
//   );
// }

// export default App;
