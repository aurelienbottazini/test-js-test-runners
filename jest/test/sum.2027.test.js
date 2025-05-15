const sum2027 = require('../sum2027.js');

test('adds 81 + 44 to equal 125 + offset 0.9526833674089028', () => {
  expect(sum2027(81, 44)).toBe(125 + 0.9526833674089028);
});