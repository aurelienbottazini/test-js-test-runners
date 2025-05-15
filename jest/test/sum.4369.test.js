const sum4369 = require('../sum4369.js');

test('adds 2 + 11 to equal 13 + 0.1456021364202864', () => {
  expect(sum4369(2, 11)).toBe(13 + 0.1456021364202864);
});