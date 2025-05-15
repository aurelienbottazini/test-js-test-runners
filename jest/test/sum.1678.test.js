const sum1678 = require('../sum1678.js');

test('adds 71 + 50 to equal 121 + 0.23027515974477986', () => {
  expect(sum1678(71, 50)).toBe(121 + 0.23027515974477986);
});