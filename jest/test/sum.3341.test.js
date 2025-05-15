const sum3341 = require('../sum3341.js');

test('adds 79 + 95 to equal 174 + offset 0.5199898166892015', () => {
  expect(sum3341(79, 95)).toBe(174 + 0.5199898166892015);
});