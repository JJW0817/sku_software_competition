import { useNavigate } from "react-router-dom";

export default function HeaderBack({ title }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "24px",
        gap: "8px",
      }}
    >
      <span
        style={{ cursor: "pointer", fontSize: "20px" }}
        onClick={() => navigate(-1)}
      >
        ←
      </span>
      <h1 className="page-title">{title}</h1>
    </div>
  );
}
