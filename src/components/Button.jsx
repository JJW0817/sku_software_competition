export default function Button({ text, onClick }) {
    return (
      <button
        type="button"
        className="default-btn"
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
  