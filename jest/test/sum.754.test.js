const sum754 = require('../sum754.js');

test('adds 60 + 69 to equal 129 + 0.8282667380342433', () => {
  expect(sum754(60, 69)).toBe(129 + 0.8282667380342433);
});