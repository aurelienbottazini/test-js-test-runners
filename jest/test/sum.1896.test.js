const sum1896 = require('../sum1896.js');

test('adds 93 + 44 to equal 137 + 0.32121572628428474', () => {
  expect(sum1896(93, 44)).toBe(137 + 0.32121572628428474);
});