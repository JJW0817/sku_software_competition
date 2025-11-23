import Header from "../components/Header";
import "../styles/knowledge.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../components/SearchBar"; // 🔍 추가

function KnowledgePage() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  // 나중에 백엔드로부터 받아올 데이터
  const posts = [];

  const filteredPosts = posts.filter(
    (post) =>
      post.title.includes(searchText) ||
      post.content.includes(searchText)
  );

  return (
    <div className="knowledge-page">
      <Header title="지식 교환소" />

      <div className="knowledge-container">

        {/* 상단 영역 */}
        <div className="knowledge-top">

          {/* 왼쪽: 글쓰기 버튼 */}
          <button
            className="write-btn-modern"
            onClick={() => navigate("/knowledge/write")}
          >
            📝 글쓰기
          </button>

          {/* 오른쪽: SearchBar (공통 검색창) */}
          <SearchBar
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        {/* 게시글 목록 */}
        <div className="post-list">
          {filteredPosts.length === 0 ? (
            <div className="empty-message">등록된 지식 교환 글이 없습니다.</div>
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="post-card"
                onClick={() => navigate(`/knowledge/detail/${post.id}`)}
              >
                <div className="post-title">{post.title}</div>
                <div className="post-desc">{post.content}</div>
                <div className="post-meta">
                  <span>👁 {post.views}</span>
                  <span> · {post.time}</span>
                  <span> · {post.author}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default KnowledgePage;
