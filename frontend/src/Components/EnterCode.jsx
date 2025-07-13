

// // src/components/EnterCode.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const EnterCode = () => {
//   const [code, setCode] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (code.toLowerCase() === "abhay123") {
//       localStorage.setItem("accessCode", code);
//       navigate("/entername");
//     } else {
//       alert("Please enter valid code");
//     }
//   };

//   return (
//     <div className="h-[100dvh] bg-purple-200 flex items-center justify-center overflow-hidden">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-[90%] max-w-md text-center">
//         <h1 className="text-2xl font-bold text-purple-500 mb-6">Enter Code</h1>
//         <input
//           type="text"
//           className="w-full border border-purple-500 p-3 rounded-xl"
//           placeholder="Enter Code"
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//         />
//         <div className="h-8" />
//         <button
//           onClick={handleSubmit}
//           className="w-full bg-purple-400 text-white py-2 rounded-xl hover:bg-purple-500"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EnterCode;

// src/components/EnterCode.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EnterCode = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const allowedCodes = ["abhay123", "agrawal123", "chat123", "realtime123"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredCode = code.toLowerCase();
    if (allowedCodes.includes(enteredCode)) {
      localStorage.setItem("accessCode", enteredCode);
      navigate("/entername");
    } else {
      alert("Please enter a valid code");
    }
  };

  return (
    <div className="h-[100dvh] bg-purple-200 flex items-center justify-center overflow-hidden">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[90%] max-w-md text-center">
        <h1 className="text-2xl font-bold text-purple-500 mb-6">Enter Code</h1>
        <input
          type="text"
          className="w-full border border-purple-500 p-3 rounded-xl"
          placeholder="Enter Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <div className="h-8" />
        <button
          onClick={handleSubmit}
          className="w-full bg-purple-400 text-white py-2 rounded-xl hover:bg-purple-500"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default EnterCode;


