const sum1098 = require('../sum1098.js');

test('adds 14 + 92 to equal 106 + offset 0.8914834473343876', () => {
  expect(sum1098(14, 92)).toBe(106 + 0.8914834473343876);
});