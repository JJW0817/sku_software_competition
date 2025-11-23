import Header from "../components/Header";
import "../styles/recruit.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../components/SearchBar";   // 추가

function RecruitPage() {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  // 지금은 빈 배열 / 나중엔 백엔드 
  const posts = [];

  // 검색 적용 필터
  const filteredPosts = posts.filter((post) =>
    post.title.includes(searchText) ||
    post.content.includes(searchText)
  );

  return (
    <div className="recruit-page">
      <Header title="모집 게시판" />

      <div className="recruit-container">

        {/* 상단 UI */}
        <div className="recruit-top">

          <button
            className="recruit-write-btn-modern"
            onClick={() => navigate("/recruit/write")}
          >
            📝 글쓰기
          </button>

          {/* 공통 검색창 */}
          <SearchBar
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        {/* 게시글 목록 */}
        <div className="post-list">
          {filteredPosts.length === 0 ? (
            <div className="empty-message">아직 작성된 게시글이 없습니다.</div>
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="post-card"
                onClick={() => navigate(`/detail/${post.id}`)}
              >
                <div className="post-title">{post.title}</div>
                <div className="post-desc">{post.content}</div>
                <div className="post-meta">
                  <span className="views">👁 {post.views}</span>
                  <span className="time"> · {post.time}</span>
                  <span className="capacity"> · {post.current}/{post.total}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default RecruitPage;
