const sum3155 = require('../sum3155.js');

test('adds 40 + 38 to equal 78 + 0.2851885913035024', () => {
  expect(sum3155(40, 38)).toBe(78 + 0.2851885913035024);
});