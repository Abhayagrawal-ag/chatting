
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const EnterName = () => {
//   const [name, setName] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name.trim() === "") {
//       alert("Name cannot be empty");
//       return;
//     }
//     localStorage.setItem("userName", name);
//     navigate("/chat");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-purple-200">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-[90%] max-w-md text-center">
//         <h1 className="text-2xl font-bold text-purple-500 mb-4">Enter Your Name</h1>
//         <input
//           type="text"
//           className="w-full border border-blue-300 p-3 rounded-xl mb-4"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <div className="h-8"></div>
//         <button type="submit" className="w-full bg-purple-400 text-white py-2 rounded-xl hover:bg-purple-500">
//           Join Chat
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EnterName;


// src/components/EnterName.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EnterName = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      alert("Name cannot be empty");
      return;
    }
    localStorage.setItem("userName", name);
    navigate("/chat");
  };

  return (
    <div className="h-[100dvh] flex items-center justify-center bg-purple-200 overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-[90%] max-w-md text-center"
      >
        <h1 className="text-2xl font-bold text-purple-500 mb-6">Enter Your Name</h1>
        <input
          type="text"
          className="w-full border border-blue-300 p-3 rounded-xl "
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="h-8" />
        <button
          type="submit"
          className="w-full bg-purple-400 text-white py-2 rounded-xl hover:bg-purple-500"
        >
          Join Chat
        </button>
      </form>
    </div>
  );
};

export default EnterName;

