import React, { useState } from "react";
import { InputWrapper, StyledInput, ErrorMessage, Button } from "./styles";

const Input = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handleSubmit = () => {
    if (isValid) {
      alert(`Email registered successfully!: ${email}`);
    }
  };

  return (<>
    <InputWrapper>
      <div className="input-container">
        <StyledInput
          type="email"
          value={email}
          onChange={handleChange}
          isValid={isValid}
          placeholder="Your email address..."
        />
      {!isValid && <ErrorMessage>Please provide a valid email address</ErrorMessage>}
        <Button onClick={handleSubmit}>Notify Me</Button>
      </div>
    </InputWrapper>
    </>
  );
};

export default Input;
