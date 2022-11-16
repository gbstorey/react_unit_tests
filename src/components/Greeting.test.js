import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        // Arrange
        render(<Greeting />);

        //Act
        // ... nothing

        //Assert
        const helloWorldElement = screen.getByText('Hello World!', {exact: true});
        expect(helloWorldElement).toBeInTheDocument();
    });
    test("renders good to see you if the button was NOT clicked", () => {
        render(<Greeting/>);
        const goodToSeeYouElement = screen.getByText("good to see you", {exact: false});
        expect(goodToSeeYouElement).toBeInTheDocument();
    });
    test("renders Changed! if the button was clicked", () => {
        render(<Greeting/>);
        const buttonElement = screen.getByRole('button', {});
        userEvent.click(buttonElement);
        const changedElement = screen.getByText("Changed!", {exact: true});
        expect(changedElement).toBeInTheDocument();
    });
    test("does not render good to see you if the button was clicked", () => {
        render(<Greeting/>);
        const buttonElement = screen.getByRole('button', {});
        userEvent.click(buttonElement);
        const goodToSeeYouElement = screen.queryByText("good to see you", {exact: false});
        expect(goodToSeeYouElement).toBeNull();
    });
})

