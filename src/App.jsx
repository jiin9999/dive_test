import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import GlobalFonts from "./Fonts/fonts";

import Chats from "./Pages/Chats";
import Header from "./Components/common/Header";
import Login from "./Pages/Login";

const App = () => {
  return (
    <div className="App">
      <GlobalFonts />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </div>
  );
};

export default App;
