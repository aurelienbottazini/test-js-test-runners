const sum2918 = require('../sum2918.js');

test('adds 56 + 43 to equal 99 + offset 0.2272101471744623', () => {
  expect(sum2918(56, 43)).toBe(99 + 0.2272101471744623);
});