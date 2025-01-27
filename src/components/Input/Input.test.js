import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  test("renders the input and placeholder correctly", () => {
    render(<Input />);
    const inputElement = screen.getByPlaceholderText("Enter your email");
    expect(inputElement).toBeInTheDocument();
  });

  test("accepts input values", () => {
    render(<Input />);
    const inputElement = screen.getByPlaceholderText("Enter your email");

    fireEvent.change(inputElement, { target: { value: "test@example.com" } });
    expect(inputElement.value).toBe("test@example.com");
  });

  test("shows error message for invalid email", () => {
    render(<Input />);
    const inputElement = screen.getByPlaceholderText("Enter your email");

    // Simula a entrada de um e-mail inválido
    fireEvent.change(inputElement, { target: { value: "invalid-email" } });
    const errorMessage = screen.getByText("Please provide a valid email address");

    expect(errorMessage).toBeInTheDocument();
    expect(inputElement).toHaveStyle("border: 2px solid red");
  });

  test("does not show error message for valid email", () => {
    render(<Input />);
    const inputElement = screen.getByPlaceholderText("Enter your email");

    // Simula a entrada de um e-mail válido
    fireEvent.change(inputElement, { target: { value: "test@example.com" } });
    const errorMessage = screen.queryByText("Please provide a valid email address");

    expect(errorMessage).not.toBeInTheDocument();
    expect(inputElement).toHaveStyle("border: 2px solid #ccc");
  });
});
