const sum4827 = require('../sum4827.js');

test('adds 19 + 0 to equal 19 + offset 0.8106346130262073', () => {
  expect(sum4827(19, 0)).toBe(19 + 0.8106346130262073);
});