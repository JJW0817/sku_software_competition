import "../styles/common.css";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import Button from "../components/Button";
import HeaderBack from "../components/HeaderBack";
import { useState } from "react";

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div className="login-container">
      <HeaderBack title="로그인" />

      <InputField
        label="아이디"
        placeholder="예)hongildong1234"
        value={id}
        onChange={e => setId(e.target.value)}
      />

      <PasswordField
        label="비밀번호"
        placeholder="영문, 숫자 조합 8~16자"
        value={pw}
        onChange={e => setPw(e.target.value)}
      />

      <Button text="로그인" onClick={() => alert("로그인 요청")} />
    </div>
  );
}
