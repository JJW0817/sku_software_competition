import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/jokboWrite.css";

function JokboWrite() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [token, setToken] = useState("");

  const handleSubmit = () => {
    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }
    navigate("/jokbo");
  };

  return (
    <div className="write-page">
      <Header />

      <div className="write-container">

        
        {/* 뒤로가기 버튼 */}
        <button className="back-btn" onClick={() => navigate(-1)}>←</button>

        <div className="write-title">족보 공유하기</div>

        {/* 제목 */}
        <div className="write-field">
          <div className="label">제목</div>
          <input
            className="write-input"
            placeholder="제목을 입력하세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* 내용 */}
        <div className="write-field">
          <div className="label">내용</div>
          <textarea
            className="write-textarea"
            placeholder="내용을 입력하세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* 파일 업로드 */}
        <div className="write-field">
          <div className="label">파일 업로드</div>
          <input
            type="file"
            className="write-file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        {/* 토큰 (타이틀: 토큰, 기존 placeholder 유지) */}
        <div className="write-field">
          <div className="label">토큰 등록</div>
          <input
            type="number"
            className="write-token"
            placeholder="열람 필요 토큰🪙 (최대 등록 개수: 10)"
            value={token}
            min="0"
            max="10"
            onChange={(e) => setToken(e.target.value)}
          />
        </div>

        {/* 등록 버튼 - 위 박스들과 같은 래퍼 안에 넣음 */}
        <div className="write-field submit-field">
          <button className="submit-btn" onClick={handleSubmit}>
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default JokboWrite;
