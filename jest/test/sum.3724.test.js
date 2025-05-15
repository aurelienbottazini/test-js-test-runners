const sum3724 = require('../sum3724.js');

test('adds 55 + 75 to equal 130 + offset 0.6694170108227708', () => {
  expect(sum3724(55, 75)).toBe(130 + 0.6694170108227708);
});