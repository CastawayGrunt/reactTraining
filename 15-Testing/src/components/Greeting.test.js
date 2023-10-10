import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello World", () => {
    //Arrange
    render(<Greeting />);
    //Act
    //..nothing for this test

    //Assert
    const helloWorldElement = screen.getByText("Hello World!");
    //by adding exact false it looks for near matches without exact case or puntuation
    //   const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders good to see you, if button not clicked", () => {
    render(<Greeting />);

    const greetingElement = screen.getByText("It's good to see you!");
    expect(greetingElement).toBeInTheDocument();
  });
  test("renders Changed! when button clicked", () => {
    //arrange
    render(<Greeting />);

    //Act
    //in v14 of user events you need to initialize the user first with the following
    //  const user = userEvent.setup();
    //  await user.click(screen.getByRole("button"))
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //assert
    const changedElement = screen.getByText("Changed!");
    expect(changedElement).toBeInTheDocument();
  });
  test("hides text after button click", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //this tests for elements that should not be there.
    const changedElement = screen.queryByText("It's good to see you!");
    expect(changedElement).toBeNull();
  });
});
