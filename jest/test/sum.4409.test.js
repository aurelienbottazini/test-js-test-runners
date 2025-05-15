const sum4409 = require('../sum4409.js');

test('adds 45 + 58 to equal 103 + 0.0428346318448829', () => {
  expect(sum4409(45, 58)).toBe(103 + 0.0428346318448829);
});