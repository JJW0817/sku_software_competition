import { useState } from "react";

export default function PasswordField({ label, placeholder, value, onChange }) {
  const [show, setShow] = useState(false);

  const EyeIcon = (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#cfcfcf"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );

  const EyeOffIcon = (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#cfcfcf"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.77 21.77 0 0 1 5.06-6.94"></path>
      <path d="M1 1l22 22"></path>
      <path d="M9.88 9.88A3 3 0 0 0 12 15a3 3 0 0 0 2.12-.88"></path>
      <path d="M14.12 14.12L9.88 9.88"></path>
      <path d="M12 3a10.94 10.94 0 0 1 5.94 3.06A21.77 21.77 0 0 1 23 12a21.77 21.77 0 0 1-1.06 2.94"></path>
    </svg>
  );

  return (
    <div style={{ marginBottom: "16px" }}>
      <div className="label">{label}</div>

      <div style={{ position: "relative" }}>
        <input
          type={show ? "text" : "password"}
          className="input-box"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{ paddingRight: "42px" }}
        />

        <span
          onClick={() => setShow(!show)}
          style={{
            position: "absolute",
            right: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            height: "24px",
            width: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.85,
          }}
        >
          {show ? EyeIcon : EyeOffIcon}
        </span>
      </div>
    </div>
  );
}



