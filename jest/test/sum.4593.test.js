const sum4593 = require('../sum4593.js');

test('adds 59 + 28 to equal 87 + offset 0.6451421360130263', () => {
  expect(sum4593(59, 28)).toBe(87 + 0.6451421360130263);
});