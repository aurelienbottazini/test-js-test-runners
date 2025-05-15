const sum3585 = require('../sum3585.js');

test('adds 16 + 73 to equal 89 + offset 0.7942583991327522', () => {
  expect(sum3585(16, 73)).toBe(89 + 0.7942583991327522);
});