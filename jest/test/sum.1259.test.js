const sum1259 = require('../sum1259.js');

test('adds 70 + 74 to equal 144 + 0.8373654913391629', () => {
  expect(sum1259(70, 74)).toBe(144 + 0.8373654913391629);
});