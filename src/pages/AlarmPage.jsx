import React from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiRefreshCw } from "react-icons/fi";
import "../styles/alarm.css";

function AlarmPage() {
  const navigate = useNavigate();

  // 나중에 백엔드에서 받을 데이터 구조 예시 (지금은 비어 있음)
  const notifications = []; // ← 실제 API 데이터가 들어올 자리

  // 나중에 로그인 사용자 정보에서 받아올 값
  const username = ""; // ex) props.user.name or context.user.name

  return (
    <div className="alarm-container">
      
      {/* 상단 헤더 */}
      <header className="alarm-header">
        <FiChevronLeft
          size={24}
          className="header-back"
          onClick={() => navigate(-1)}
        />
        

        {/* 이름은 나중에 실제 값 반영 */}
        <span className="header-username">
          {username || "User"} 
        </span>

        {/* 서비스 로고 → STN */}
        <div className="header-logo">STN</div>
      </header>

      {/* 알림 목록 영역 */}
      <section className="notification-section">

        {/* 알림이 없을 때 보여주는 기본 UI */}
        {notifications.length === 0 && (
          <div className="empty-notification">
            <p>아직 알림이 없습니다</p>
          </div>
        )}

        {/* 나중에 실제 데이터가 오면 여기** */}
        {notifications.length > 0 && notifications.map((item) => (
          <div key={item.id} className="alarm-item">
            <div className="alarm-icon" />
            <div>
              <div className="alarm-text">{item.text}</div>
              <div className="alarm-time">{item.time}</div>
            </div>
          </div>
        ))}
      </section>

      {/* 새로고침 버튼 */}
      <div className="refresh-wrapper">
        <button className="refresh-btn">
          <FiRefreshCw size={20} />
        </button>
      </div>
    </div>
  );
}

export default AlarmPage;
