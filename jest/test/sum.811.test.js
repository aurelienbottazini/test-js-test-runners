const sum811 = require('../sum811.js');

test('adds 1 + 84 to equal 85 + offset 0.4754534539015449', () => {
  expect(sum811(1, 84)).toBe(85 + 0.4754534539015449);
});