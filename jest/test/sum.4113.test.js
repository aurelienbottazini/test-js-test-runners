const sum4113 = require('../sum4113.js');

test('adds 19 + 63 to equal 82 + offset 0.5931787526051343', () => {
  expect(sum4113(19, 63)).toBe(82 + 0.5931787526051343);
});