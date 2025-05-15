const sum1390 = require('../sum1390.js');

test('adds 73 + 74 to equal 147 + 0.4256443276540611', () => {
  expect(sum1390(73, 74)).toBe(147 + 0.4256443276540611);
});