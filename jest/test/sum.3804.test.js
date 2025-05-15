const sum3804 = require('../sum3804.js');

test('adds 45 + 39 to equal 84 + 0.506696291904876', () => {
  expect(sum3804(45, 39)).toBe(84 + 0.506696291904876);
});