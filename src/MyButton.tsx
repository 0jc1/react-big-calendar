import React from "react";

export interface MyButtonProps {
  label: string;
  onClick?: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        background: "#007bff",
        color: "white",
        cursor: "pointer"
      }}
    >
      {label}
    </button>
  );
};

export default MyButton;