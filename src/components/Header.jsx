import "../styles/header.css";

function Header({ title }) {
  return (
    <div className="header">
      {/* 왼쪽은 로고 or 아이콘 */}
      <div className="header-left">STUNET's</div>

      {/* 중앙 제목 */}
      <div className="header-center">{title}</div>

      <div className="header-right"></div>
    </div>
  );
}

export default Header;
