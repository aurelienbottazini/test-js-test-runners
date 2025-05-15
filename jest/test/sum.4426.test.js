const sum4426 = require('../sum4426.js');

test('adds 6 + 23 to equal 29 + 0.3420706367002696', () => {
  expect(sum4426(6, 23)).toBe(29 + 0.3420706367002696);
});