const sum4843 = require('../sum4843.js');

test('adds 67 + 37 to equal 104 + 0.6950686559925909', () => {
  expect(sum4843(67, 37)).toBe(104 + 0.6950686559925909);
});