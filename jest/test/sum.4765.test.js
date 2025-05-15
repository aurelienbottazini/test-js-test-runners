const sum4765 = require('../sum4765.js');

test('adds 15 + 59 to equal 74 + offset 0.5621588455245805', () => {
  expect(sum4765(15, 59)).toBe(74 + 0.5621588455245805);
});