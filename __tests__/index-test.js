jest.unmock('../index');

describe('is-shit', () => {
  it('should check if this is shit', () => {
    const isShit = require('../index');
    expect(isShit(this)).toBe(true);
  });
});
