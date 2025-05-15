const sum1354 = require('../sum1354.js');

test('adds 52 + 96 to equal 148 + 0.2826252248156633', () => {
  expect(sum1354(52, 96)).toBe(148 + 0.2826252248156633);
});