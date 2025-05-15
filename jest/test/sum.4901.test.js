const sum4901 = require('../sum4901.js');

test('adds 0 + 89 to equal 89 + offset 0.7120908892658564', () => {
  expect(sum4901(0, 89)).toBe(89 + 0.7120908892658564);
});