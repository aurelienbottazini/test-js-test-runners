const sum4841 = require('../sum4841.js');

test('adds 49 + 55 to equal 104 + 0.5601691596673994', () => {
  expect(sum4841(49, 55)).toBe(104 + 0.5601691596673994);
});