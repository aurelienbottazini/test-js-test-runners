const sum4981 = require('../sum4981.js');

test('adds 17 + 69 to equal 86 + 0.3567003942971253', () => {
  expect(sum4981(17, 69)).toBe(86 + 0.3567003942971253);
});