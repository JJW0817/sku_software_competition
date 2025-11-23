import "./../styles/home.css";
import { useNavigate } from "react-router-dom";
import { 
  FaSearch,
  FaBell,
  FaCog,
  FaUserFriends,
  FaBook,
  FaExchangeAlt,
  FaComments,
  FaUser,
  FaClipboardCheck
} from "react-icons/fa";


function Home() {
  const navigate = useNavigate();

  //  테스트용 알림 수 (나중에 백엔드 값으로 연결)
  const alarmCount = 3;

  return (
    <div className="home-page">

      {/* --------- 상단 헤더 --------- */}
      <div className="home-header">
  
  <div className="home-header-left">
    <span className="home-title">STUNET</span>
  </div>


  {/*  아이콘 그룹 + 로그인/회원가입 한 곳에 통합 */}
  <div className="home-header-icons">

    <button 
      className="header-auth-btn" 
      onClick={() => navigate("/login")}
    >
      로그인
    </button>

    <button 
      className="header-auth-btn" 
      onClick={() => navigate("/signup")}
    >
      회원가입
    </button>

    <FaSearch className="home-icon" />

    <div className="bell-wrapper" onClick={() => navigate("/alarm")}>
      <FaBell className="home-bell-icon" />
      {alarmCount > 0 && (
        <span className="alarm-badge">
          {alarmCount > 99 ? "99+" : alarmCount}
        </span>
      )}
    </div>

    <FaCog className="home-icon" onClick={() => navigate("/profile")} />

  </div>
</div>

     

  

      {/* --------- Quick Links --------- */}
      <div className="quick-section">
        <div className="quick-card" onClick={() => window.open("https://www.skuniv.ac.kr/", "_blank")}>
          <div className="quick-title">🏫 홈페이지</div>
        </div>

        <div className="quick-card" onClick={() => window.open("https://sportal.skuniv.ac.kr/login", "_blank")}>
          <div className="quick-title">🖥 포탈</div>
        </div>

        <div className="quick-card" onClick={() => window.open("https://www.skuniv.ac.kr/academic-calendar", "_blank")}>
          <div className="quick-title">📅 학사일정</div>
        </div>
      </div>

      {/* --------- 메인 기능 (세로 3칸) --------- */}
      <div className="main-vertical-list">

        <div className="main-vertical-card" onClick={() => navigate("/recruit")}>
          <FaUserFriends className="main-vertical-icon" />
          <div className="title-tooltip-wrapper">
            <div className="main-vertical-title">모집 게시판</div>
            <div className="hover-ment">팀원을 구해보세요!</div>
          </div>
        </div>

        <div className="main-vertical-card" onClick={() => navigate("/jokbo")}>
          <FaBook className="main-vertical-icon" />
          <div className="title-tooltip-wrapper">
            <div className="main-vertical-title">족보 열람소</div>
            <div className="hover-ment">족보를 확인해보세요!</div>
          </div>
        </div>

        <div className="main-vertical-card" onClick={() => navigate("/knowledge")}>
          <FaExchangeAlt className="main-vertical-icon" />
          <div className="title-tooltip-wrapper">
            <div className="main-vertical-title">지식 교환소</div>
            <div className="hover-ment">지식을 교환하세요!</div>
          </div>
        </div>

      </div>

      {/* --------- 하단 탭바 --------- */}
      <div className="bottom-nav">
        <div className="bottom-item" onClick={() => navigate("/chat")}>
          <FaComments className="bottom-icon" />
          <span>채팅</span>
        </div>

        <div className="bottom-item" onClick={() => navigate("/profile")}>
          <FaUser className="bottom-icon" />
          <span>프로필</span>
        </div>

        <div className="bottom-item" onClick={() => navigate("/match")}>
          <FaClipboardCheck className="bottom-icon" />
          <span>매칭 현황</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
