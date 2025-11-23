import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/profile.css";

function ProfilePage() {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "",
    major: "",
    id: "",
    nickname: "",
    gender: "", // "남" 또는 "여"
  });

  const handleEdit = () => setEditMode(true);
  const handleCancel = () => setEditMode(false);

  const handleSave = () => {
    console.log("저장된 데이터:", userInfo);
    setEditMode(false);
  };

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      navigate("/login");
    }
  };

  return (
    <div className="profile-page">
      <Header />

      <div className="profile-container">
        
        {/* 상단 프로필 */}
        <div className="profile-card">
          <div className="profile-image"></div>
          <div className="profile-name">이름: {userInfo.name}</div>

          <div className="profile-trust">
            <span className="trust-count">🪙 누적 토큰 수: </span>
            <span className="trust-label">신뢰도: </span>
          </div>
        </div>

        {/* 정보 카드 */}
        <div className="info-card">

          {!editMode && (
            <div className="info-card-top">
              <button className="info-top-btn" onClick={handleEdit}>
                회원 정보 수정
              </button>
            </div>
          )}

          {/* 이름/학과/아이디/활동명 */}
          {[
            ["이름", "name"],
            ["학과", "major"],
            ["아이디", "id"],
            ["활동명", "nickname"],
          ].map(([label, key]) => (
            <div key={key}>
              <div className="info-title">{label}</div>

              {editMode ? (
                <input
                  type="text"
                  className="info-input"
                  value={userInfo[key]}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, [key]: e.target.value })
                  }
                />
              ) : (
                <div className="info-value">
                  {label}: {userInfo[key]}
                </div>
              )}
            </div>
          ))}

          {/* 🔥 성별 영역: 원 안 체크 표시 라디오 스타일 */}
          <div>
            <div className="info-title">성별</div>

            {editMode ? (
              <div className="gender-radio-wrapper">

                <label className="gender-radio">
                  <input
                    type="radio"
                    name="gender"
                    value="남"
                    checked={userInfo.gender === "남"}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, gender: e.target.value })
                    }
                  />
                  <span className="radio-circle"></span>
                  <span className="radio-label">남</span>
                </label>

                <label className="gender-radio">
                  <input
                    type="radio"
                    name="gender"
                    value="여"
                    checked={userInfo.gender === "여"}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, gender: e.target.value })
                    }
                  />
                  <span className="radio-circle"></span>
                  <span className="radio-label">여</span>
                </label>

              </div>
            ) : (
              <div className="info-value">성별: {userInfo.gender}</div>
            )}
          </div>

          {/* 저장/취소 */}
          {editMode && (
            <div className="edit-button-wrapper">
              <button className="save-btn" onClick={handleSave}>저장하기</button>
              <button className="cancel-btn" onClick={handleCancel}>취소</button>
            </div>
          )}

        </div>

        {/* 계정 관리 */}
        <div className="account-card">
          <div className="account-link" onClick={handleLogout}>로그아웃</div>
          <div className="account-link danger">회원탈퇴</div>
        </div>

      </div>
    </div>
  );
}

export default ProfilePage;
