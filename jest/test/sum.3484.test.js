const sum3484 = require('../sum3484.js');

test('adds 38 + 29 to equal 67 + offset 0.4030197038424409', () => {
  expect(sum3484(38, 29)).toBe(67 + 0.4030197038424409);
});