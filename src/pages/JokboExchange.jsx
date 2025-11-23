import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar"; // 🔍 추가
import "../styles/jokboExchange.css";

function JokboExchange() {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState(""); // 🔍 검색 상태

  const [posts, setPosts] = useState([
    {
      id: 1,
      subject: "컴퓨터네트워크 중간족보",
      offer: "2023년 중간",
      request: "2024년 중간",
      status: "대기",
      author: "홍길동",
      time: "2시간 전",
    },
  ]);

  const handleBack = () => navigate(-1);

  //  글쓰기 페이지 이동
  const goWrite = () => {
    navigate("/jokbo/write");
  };


  //  검색 필터by 키워드
  const filteredPosts = posts.filter(
    (post) =>
      post.subject.includes(searchText) ||
      post.offer.includes(searchText) ||
      post.request.includes(searchText) ||
      post.author.includes(searchText)
  );

  return (
    <div className="jokbo-page">
      <Header title="족보교환소" />

      <div className="jokbo-container">

      <div className="jokbo-top">
  <div className="left-side">
    <button className="back-btn" onClick={handleBack}>←</button>

    <button className="write-btn-modern" onClick={goWrite}>
      ✏️ 글쓰기
    </button>
  </div>

  <SearchBar
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
  />
</div>



        {/* 제목 블럭 */}
        <div className="jokbo-title-block">
          <div className="jokbo-title">족보교환소</div>
          <div className="jokbo-subtitle">서경대</div>
        </div>

        {/* 글 리스트 */}
        <div className="jokbo-list">
          {filteredPosts.length === 0 ? (
            <div className="empty-message">검색 결과가 없습니다.</div>
          ) : (
            filteredPosts.map((post) => (
              <div className="jokbo-card" key={post.id}>
                <div className="card-header">
                  <div className="card-subject">{post.subject}</div>
                  <span className="status-badge status-pending">교환 대기</span>
                </div>

                <div className="card-line">
                  <span className="card-label">제공</span>
                  <span className="card-text">{post.offer}</span>
                </div>

                <div className="card-line">
                  <span className="card-label">요청</span>
                  <span className="card-text">{post.request}</span>
                </div>

                <div className="card-meta">
                  <span>👤 {post.author}</span>
                  <span className="meta-dot">·</span>
                  <span>{post.time}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default JokboExchange;
