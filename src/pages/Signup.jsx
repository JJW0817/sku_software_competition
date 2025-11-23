import "../styles/common.css";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import HeaderBack from "../components/HeaderBack";
import Button from "../components/Button";
import { useState } from "react";

export default function Signup() {

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [school, setSchool] = useState("");
  const [gender, setGender] = useState("");

  //  설문 답변 상태값
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");

  //  설문 기반 활동명 생성 함수
  const calculateNickname = () => {
    if (!q1 || !q2 || !q3 || !q4) return null;
  
    const scoreMap = {
      S: 1,
      N: 0,
      F: -1,
      C: 1,
      L: -1
    };
  
    // 점수 계산
    let structureScore =
      scoreMap[q1] + scoreMap[q3];  // S/N/F → 1/0/-1
  
    let socialScore =
      scoreMap[q2] + scoreMap[q4];  // C/N/L → 1/0/-1
  
    // 구조 성향 결정
    let structure;
    if (structureScore > 0) structure = "S";
    else if (structureScore < 0) structure = "F";
    else structure = Math.random() < 0.5 ? "S" : "F";
  
    // 소통 성향 결정
    let social;
    if (socialScore > 0) social = "C";
    else if (socialScore < 0) social = "L";
    else social = Math.random() < 0.5 ? "C" : "L";
  
    // 조합 결정
    const key = structure + social;
  
    switch (key) {
      case "SC": return "꼼꼼한 설계자";
      case "SL": return "여유로운 조율가";
      case "FC": return "불타는 실천가";
      case "FL": return "고민하는 창작자";
      default: return "미분류 캐릭터";
    }
  };
  

  const handleSignup = () => {
    const nickname = calculateNickname();

    if (!nickname) {
      alert("설문을 완료해주세요!");
      return;
    }

    const formData = {
      name,
      id,
      pw,
      school,
      gender,
      nickname,   //  활동명 포함
    };

    console.log("회원가입 데이터:", formData);

    alert(`회원가입을 완료했습니다.\n당신은 ${nickname}!`);
  };


  return (
    <div className="signup-container">

      <HeaderBack title="회원가입" />

      {/* 이름 */}
      <InputField
        label="이름"
        placeholder="홍길동"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      {/* 아이디 */}
      <InputField
        label="아이디"
        placeholder="honggildong1234"
        value={id}
        onChange={e => setId(e.target.value)}
      />

      {/* 비밀번호 */}
      <PasswordField
        label="비밀번호"
        placeholder="영문, 숫자 조합 8~16자"
        value={pw}
        onChange={e => setPw(e.target.value)}
      />

      {/* 비밀번호 확인 */}
      <PasswordField
        label="비밀번호 확인"
        placeholder="비밀번호를 다시 입력해주세요"
        value={pwCheck}
        onChange={e => setPwCheck(e.target.value)}
      />

      {/* 학과 */}
      <InputField
        label="학과"
        placeholder="예) 소프트웨어학과"
        value={school}
        onChange={e => setSchool(e.target.value)}
      />

      {/* 성별 */}
      <div className="label" style={{ marginBottom: "8px" }}>성별</div>

      <div style={{ display: "flex", gap: "20px", marginBottom: "25px" }}>
        <label><input type="radio" name="gender" value="남자"
          checked={gender === "남자"} onChange={() => setGender("남자")} /> 남자</label>

        <label><input type="radio" name="gender" value="여자"
          checked={gender === "여자"} onChange={() => setGender("여자")} /> 여자</label>
      </div>

    {/* ================================ */}
{/*        설문 4문항 UI         */}
{/* ================================ */}

<div className="survey-section">

{/* Q1 */}
<div className="survey-block">
  <div className="survey-title">Q1. 팀플 시작할 때 나는...</div>

  <label className={`option-card ${q1 === "S" ? "selected" : ""}`}>
    <input type="radio" name="q1" onChange={() => setQ1("S")} />
    해야 할 일을 먼저 정리하고 시작한다
  </label>

  <label className={`option-card ${q1 === "N" ? "selected" : ""}`}>
    <input type="radio" name="q1" onChange={() => setQ1("N")} />
    대략 방향만 맞추고 일단 시작한다
  </label>

  <label className={`option-card ${q1 === "F" ? "selected" : ""}`}>
    <input type="radio" name="q1" onChange={() => setQ1("F")} />
    시작하고 보면서 유동적으로 정리한다
  </label>
</div>

{/* Q2 */}
<div className="survey-block">
  <div className="survey-title">Q2. 회의할 때 나는...</div>

  <label className={`option-card ${q2 === "C" ? "selected" : ""}`}>
    <input type="radio" name="q2" onChange={() => setQ2("C")} />
    아이디어를 많이 던지며 이야기한다
  </label>

  <label className={`option-card ${q2 === "N" ? "selected" : ""}`}>
    <input type="radio" name="q2" onChange={() => setQ2("N")} />
    상황 봐가며 적당히 말한다
  </label>

  <label className={`option-card ${q2 === "L" ? "selected" : ""}`}>
    <input type="radio" name="q2" onChange={() => setQ2("L")} />
    주로 듣고 있다가 꼭 필요할 때만 말한다
  </label>
</div>

{/* Q3 */}
<div className="survey-block">
  <div className="survey-title">Q3. 마감 직전에 나는...</div>

  <label className={`option-card ${q3 === "S" ? "selected" : ""}`}>
    <input type="radio" name="q3" onChange={() => setQ3("S")} />
    마감 며칠 전부터 조금씩 끝내놓는 편이다
  </label>

  <label className={`option-card ${q3 === "N" ? "selected" : ""}`}>
    <input type="radio" name="q3" onChange={() => setQ3("N")} />
    중간중간 하다가 막판에 한 번 더 정리한다
  </label>

  <label className={`option-card ${q3 === "F" ? "selected" : ""}`}>
    <input type="radio" name="q3" onChange={() => setQ3("F")} />
    마감 직전에 몰아서 터뜨리는 편이다
  </label>
</div>

{/* Q4 */}
<div className="survey-block">
  <div className="survey-title">Q4. 코드나 문서 작성할 때 나는...</div>

  <label className={`option-card ${q4 === "C" ? "selected" : ""}`}>
    <input type="radio" name="q4" onChange={() => setQ4("C")} />
    다른 사람이 봐도 이해되게 정리한다
  </label>

  <label className={`option-card ${q4 === "N" ? "selected" : ""}`}>
    <input type="radio" name="q4" onChange={() => setQ4("N")} />
    일단 돌아가게 만들고 나중에 정리한다
  </label>

  <label className={`option-card ${q4 === "L" ? "selected" : ""}`}>
    <input type="radio" name="q4" onChange={() => setQ4("L")} />
    내 규칙대로만 정리해둔다
  </label>
</div>

</div>




      {/* 회원가입 버튼 */}
      <Button text="회원가입" onClick={handleSignup} />

    </div>
  );
}
