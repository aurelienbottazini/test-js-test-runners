const sum1664 = require('../sum1664.js');

test('adds 66 + 56 to equal 122 + 0.9957579205882318', () => {
  expect(sum1664(66, 56)).toBe(122 + 0.9957579205882318);
});