const sum1659 = require('../sum1659.js');

test('adds 30 + 4 to equal 34 + offset 0.017969759066381874', () => {
  expect(sum1659(30, 4)).toBe(34 + 0.017969759066381874);
});