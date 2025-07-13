// src/components/Chat.jsx
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const Chat = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);
  const bottomRef = useRef(null);

  const name = localStorage.getItem("userName");
  const accessCode = localStorage.getItem("accessCode");

  useEffect(() => {
    if (!accessCode || accessCode.toLowerCase() !== "abhay123") {
      navigate("/");
      return;
    }
    if (!name) {
      navigate("/entername");
      return;
    }

    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (msg.trim() === "") return;

    const newMsg = { name, message: msg };
    socket.emit("send_message", newMsg); // only emit
    setMsg(""); // clear input
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="bg-purple-600 text-white text-xl font-bold p-4 text-center">
        Chat App
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {chat.map((c, i) => (
          <div
            key={i}
            className={`max-w-[75%] p-3 rounded-xl shadow ${
              c.name === name
                ? "bg-purple-400 text-white ml-auto font-semibold"
                : "bg-purple-200 text-black font-semibold"
            }`}
          >
            <div className="text-sm font-semibold">{c.name}</div>
            <div>{c.message}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={sendMessage} className="p-4 border-t flex gap-2 bg-white">
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border border-purple-500 p-2 rounded-xl focus:outline-none"
        />
        <button
          type="submit"
          className="bg-purple-400 text-white px-4 py-2 rounded-xl hover:bg-purple-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
