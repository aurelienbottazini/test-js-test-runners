const sum3005 = require('../sum3005.js');

test('adds 26 + 19 to equal 45 + offset 0.06403748877483306', () => {
  expect(sum3005(26, 19)).toBe(45 + 0.06403748877483306);
});