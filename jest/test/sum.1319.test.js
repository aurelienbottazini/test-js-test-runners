const sum1319 = require('../sum1319.js');

test('adds 9 + 42 to equal 51 + 0.6886852704764368', () => {
  expect(sum1319(9, 42)).toBe(51 + 0.6886852704764368);
});