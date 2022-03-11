import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import CharCard from '../CharCard'

afterEach(() => {
    cleanup();
})

test('should render name,birthday,nickname,portrayed of char in card', () => {
    const walterWhite = { "char_id": 1, "name": "Walter White", "birthday": "09-07-1958", "occupation": ["High School Chemistry Teacher", "Meth King Pin"], "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg", "status": "Presumed dead", "nickname": "Heisenberg", "appearance": [1, 2, 3, 4, 5], "portrayed": "Bryan Cranston", "category": "Breaking Bad", "better_call_saul_appearance": [] }
    render(<CharCard charData={walterWhite} />)
    const charCardElement = screen.getByTestId(`CharCard-${walterWhite.char_id}`);
    expect(charCardElement).toBeInTheDocument();
    expect(charCardElement).toHaveTextContent(walterWhite.name)
    expect(charCardElement).toHaveTextContent(walterWhite.birthday)
    expect(charCardElement).toHaveTextContent(walterWhite.nickname)
    expect(charCardElement).toHaveTextContent(walterWhite.portrayed)
})
