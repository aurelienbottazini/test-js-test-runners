const sum1025 = require('../sum1025.js');

test('adds 10 + 84 to equal 94 + 0.9023244583590686', () => {
  expect(sum1025(10, 84)).toBe(94 + 0.9023244583590686);
});