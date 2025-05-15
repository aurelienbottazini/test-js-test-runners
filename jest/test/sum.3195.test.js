const sum3195 = require('../sum3195.js');

test('adds 55 + 98 to equal 153 + 0.4260732050751115', () => {
  expect(sum3195(55, 98)).toBe(153 + 0.4260732050751115);
});