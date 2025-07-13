// // src/components/Home.jsx
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-purple-300 via-purple-100 to-white flex items-center justify-center p-4">
//       <div className="bg-white rounded-3xl shadow-lg p-8 max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
        
//         {/* Left Content */}
//         <div className="flex-1 text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
//             MOBILE CHAT <span className="text-purple-600">APPLICATION</span>
//           </h1>
//           <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
//            🚀 <span className="font-semibold">Instant Chat:</span> Connect and chat in real-time — no signup needed.<br />
//             🔒 <span className="font-semibold">Access Code Protected:</span> Enter a secret code to join the chat room.<br />
//              🙋 <span className="font-semibold">User Identity:</span> Enter your name before chatting to identify yourself.<br />
//             🧠 <span className="font-semibold">No Chat Storage:</span> Your messages are temporary and disappear after refresh.
// </p>
//           <br></br>
//           <button
//             onClick={() => navigate("/entercode")}
//             className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-md transition"
//           >
//             GET STARTED →
//           </button>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default Home;
// src/components/Home.jsx
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[100dvh] overflow-hidden bg-gradient-to-tr from-purple-300 via-purple-100 to-white flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 max-w-4xl w-full flex flex-col md:flex-row items-center gap-8 overflow-auto">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            MOBILE CHAT <span className="text-purple-600">APPLICATION</span>
          </h1>

          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            🚀 <span className="font-semibold">Instant Chat:</span> Connect and chat in real-time — no signup needed.<br />
            🔒 <span className="font-semibold">Access Code Protected:</span> Enter a secret code to join the chat room.<br />
            🙋 <span className="font-semibold">User Identity:</span> Enter your name before chatting to identify yourself.<br />
            🧠 <span className="font-semibold">No Chat Storage:</span> Your messages are temporary and disappear after refresh.
          </p>

          <button
            onClick={() => navigate("/entercode")}
            className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-md transition"
          >
            GET STARTED →
          </button>
        </div>

      </div>
    </div>
  );
};

export default Home;

