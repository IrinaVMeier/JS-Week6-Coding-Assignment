var expect = chai.expect;

describe ('createDeck', () => {
    it('should have length of 52', () => {
        expect(deck.cards).to.have.length(52);
    });
});
