const sum3012 = require('../sum3012.js');

test('adds 87 + 71 to equal 158 + 0.32740977136990834', () => {
  expect(sum3012(87, 71)).toBe(158 + 0.32740977136990834);
});