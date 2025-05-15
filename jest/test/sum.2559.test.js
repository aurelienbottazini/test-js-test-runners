const sum2559 = require('../sum2559.js');

test('adds 42 + 33 to equal 75 + 0.14113284469328646', () => {
  expect(sum2559(42, 33)).toBe(75 + 0.14113284469328646);
});