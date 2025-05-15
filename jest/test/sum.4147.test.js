const sum4147 = require('../sum4147.js');

test('adds 69 + 89 to equal 158 + 0.08764031658634175', () => {
  expect(sum4147(69, 89)).toBe(158 + 0.08764031658634175);
});