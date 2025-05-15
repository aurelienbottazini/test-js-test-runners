const sum1214 = require('../sum1214.js');

test('adds 11 + 71 to equal 82 + offset 0.8654735643729967', () => {
  expect(sum1214(11, 71)).toBe(82 + 0.8654735643729967);
});