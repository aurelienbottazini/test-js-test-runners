const sum3163 = require('../sum3163.js');

test('adds 74 + 26 to equal 100 + 0.924610265768408', () => {
  expect(sum3163(74, 26)).toBe(100 + 0.924610265768408);
});