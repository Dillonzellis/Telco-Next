import React from "react";

// const navItems = [
//     { id: 1, name: 'Home', path: '/' },
//     { id: 2, name: 'About', path: '/about' },
//     { id: 3, name: 'Contact', path: '/contact' }
//   ];

//   export default navItems;

// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";
// import navItems from "./navItems";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   function toggleMenu() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <nav className="bg-gray-800">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           <div className="flex items-center">
//             <a href="/" className="flex-shrink-0">
//               <img
//                 className="h-8 w-8"
//                 src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                 alt="Workflow logo"
//               />
//             </a>
//             <div className="hidden sm:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {navItems.map((item) => (
//                   <a href={item.path} key={item.id} className="nav-link">
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="-mr-2 flex sm:hidden">
//             <button
//               className="navbar-toggle inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//               aria-label="Toggle navigation menu"
//               onClick={toggleMenu}
//             >
//               {isOpen ? (
//                 <FontAwesomeIcon icon={faTimes} />
//               ) : (
//                 <FontAwesomeIcon icon={faBars} />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`sm:flex sm:items-center sm:justify-between ${
//           isOpen ? "block" : "hidden"
//         }`}
//       >
//         <div className="px-2 pt-2 pb-3">
//           {navItems.map((item) => (
//             <a href={item.path} key={item.id} className="nav-link block">
//               {item.name}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
