const sum3495 = require('../sum3495.js');

test('adds 25 + 81 to equal 106 + offset 0.9915215308732319', () => {
  expect(sum3495(25, 81)).toBe(106 + 0.9915215308732319);
});