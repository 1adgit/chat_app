import "./App.css";
import { Route } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";
import Homepage from "./Pages/Homepage";
import { useEffect, useState } from "react";
import { ChatContext } from "./Context/ChatProvider";
import { useHistory } from "react-router-dom";
function App() {
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);
  const [notification, setNotification] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) history.push("/");
  }, [history]);
  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        selectedChat,
        setSelectedChat,
        chats,
        setChats,
        setNotification,
        notification,
      }}
    >
      <div className="App">
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={ChatPage} />
      </div>
    </ChatContext.Provider>
  );
}

export default App;
