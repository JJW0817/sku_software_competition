import Header from "../components/Header";
import "../styles/recruitWrite.css";

function RecruitWrite() {
  return (
    <div className="recruit-write-wrapper">   {/*  전역스타일 차단용 wrapper */}

      <div className="write-page">
        <Header title="모집 게시판 - 글쓰기" />

        <div className="write-container">

          {/* 제목 입력 */}
          <div className="input-group">
            <label className="input-label">제목</label>
            <input 
              type="text" 
              className="input-box" 
              placeholder="제목을 입력하세요"
            />
          </div>

          {/* 내용 입력 */}
          <div className="input-group">
            <label className="input-label">내용</label>
            <textarea 
              className="textarea-box" 
              placeholder="내용을 입력하세요"
            ></textarea>
          </div>

          {/* 모집 인원 입력 */}
          <div className="input-group">
            <label className="input-label">모집 인원</label>
            <input 
              type="number" 
              className="input-box" 
              placeholder="예: 4"
            />
          </div>

          {/* 등록 버튼 */}
          <button className="submit-btn">
            글 등록하기
          </button>

        </div>
      </div>
    </div>
  );
}

export default RecruitWrite;
