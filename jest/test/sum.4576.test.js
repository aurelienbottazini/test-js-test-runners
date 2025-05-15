const sum4576 = require('../sum4576.js');

test('adds 54 + 61 to equal 115 + 0.7256970021158133', () => {
  expect(sum4576(54, 61)).toBe(115 + 0.7256970021158133);
});