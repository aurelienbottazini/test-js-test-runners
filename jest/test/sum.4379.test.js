const sum4379 = require('../sum4379.js');

test('adds 66 + 78 to equal 144 + 0.25090398056094254', () => {
  expect(sum4379(66, 78)).toBe(144 + 0.25090398056094254);
});