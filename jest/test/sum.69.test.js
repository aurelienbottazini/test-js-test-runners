const sum69 = require('../sum69.js');

test('adds 10 + 7 to equal 17 + 0.7319863687462229', () => {
  expect(sum69(10, 7)).toBe(17 + 0.7319863687462229);
});