export default function InputField({ label, type = "text", placeholder, value, onChange }) {
    return (
      <div style={{ marginBottom: "16px" }}>
        <div className="label">{label}</div>
        <input
          type={type}
          className="input-box"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  