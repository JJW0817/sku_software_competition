import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfilePage from "./pages/ProfilePage";

import RecruitPage from "./pages/RecruitPage";
import RecruitWrite from "./pages/RecruitWrite";

import JokboExchange from "./pages/JokboExchange";
import JokboWrite from "./pages/JokboWrite";

import KnowledgePage from "./pages/KnowledgePage";
import KnowledgeWrite from "./pages/KnowledgeWrite";

import AlarmPage from "./pages/AlarmPage";
import Home from "./pages/Home";      

function App() {
  return (
    <Routes>

      {/* 홈 */}
      <Route path="/" element={<Home />} />

      {/* 로그인/회원가입 */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* 모집 게시판 */}
      <Route path="/recruit" element={<RecruitPage />} />
      <Route path="/recruit/write" element={<RecruitWrite />} />

      {/* 족보 교환소 */}
      <Route path="/jokbo" element={<JokboExchange />} />
      <Route path="/jokbo/write" element={<JokboWrite />} />

      {/* 지식 교환소 */}
      <Route path="/knowledge" element={<KnowledgePage />} />
      <Route path="/knowledge/write" element={<KnowledgeWrite />} />

      {/* 프로필 */}
      <Route path="/profile" element={<ProfilePage />} />

      {/* 알람 */}
      <Route path="/alarm" element={<AlarmPage />} />

      {/* 채팅 */}
      <Route path="/chat" element={<div>채팅 준비중!</div>} />

    </Routes>
  );
}

export default App;
