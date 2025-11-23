import Header from "../components/Header";
import "../styles/knowledgeWrite.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function KnowledgeWrite() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    //  나중에 백엔드로 POST 요청 들어갈 자리
    console.log({
      title,
      content,
    });

    alert("지식 교환 글이 등록되었습니다.");
    navigate("/knowledge"); // 작성 후 목록으로 이동
  };

  return (
    <div className="knowledge-write-page">
      <Header title="지식 교환소 - 글쓰기" />

      <div className="knowledge-write-container">

        {/* 제목 입력 */}
        <div className="input-group">
          <label className="input-label">제목</label>
          <input
            type="text"
            className="input-box"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* 내용 입력 */}
        <div className="input-group">
          <label className="input-label">내용</label>
          <textarea
            className="textarea-box"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        {/* 등록 버튼 */}
        <button className="submit-btn" onClick={handleSubmit}>
          글 등록하기
        </button>
      </div>
    </div>
  );
}

export default KnowledgeWrite;
