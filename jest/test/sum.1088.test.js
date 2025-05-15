const sum1088 = require('../sum1088.js');

test('adds 47 + 41 to equal 88 + 0.039890301282788254', () => {
  expect(sum1088(47, 41)).toBe(88 + 0.039890301282788254);
});