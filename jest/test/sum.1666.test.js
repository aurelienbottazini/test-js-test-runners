const sum1666 = require('../sum1666.js');

test('adds 81 + 67 to equal 148 + offset 0.8391607640553828', () => {
  expect(sum1666(81, 67)).toBe(148 + 0.8391607640553828);
});