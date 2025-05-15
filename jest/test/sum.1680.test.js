const sum1680 = require('../sum1680.js');

test('adds 92 + 52 to equal 144 + offset 0.26758482248960935', () => {
  expect(sum1680(92, 52)).toBe(144 + 0.26758482248960935);
});