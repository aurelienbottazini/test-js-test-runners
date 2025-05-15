const sum3793 = require('../sum3793.js');

test('adds 93 + 44 to equal 137 + offset 0.2248230838233568', () => {
  expect(sum3793(93, 44)).toBe(137 + 0.2248230838233568);
});