const sum3206 = require('../sum3206.js');

test('adds 56 + 7 to equal 63 + 0.22200342737635537', () => {
  expect(sum3206(56, 7)).toBe(63 + 0.22200342737635537);
});