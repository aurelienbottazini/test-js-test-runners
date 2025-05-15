const sum3382 = require('../sum3382.js');

test('adds 44 + 66 to equal 110 + 0.6193921889350388', () => {
  expect(sum3382(44, 66)).toBe(110 + 0.6193921889350388);
});