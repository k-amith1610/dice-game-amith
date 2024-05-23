import React from "react";
import styled from "styled-components";

const Alert = ({ message, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <p>{message}</p>
        <button onClick={onClose}>Got it!</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Alert;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  animation: pop 0.3s ease-out;
  width: 80%; /* Adjust the width */

  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
    animation: shake 0.3s ease-out;

    @media (max-width: 480px) {
      font-size: 16px;
      padding: 10px;
    }
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;

    @media (max-width: 480px) {
      padding: 8px 16px;
      font-size: 14px;
    }
  }

  button:hover {
    background-color: #0056b3;
  }

  @keyframes pop {
    0% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
  }
`;
