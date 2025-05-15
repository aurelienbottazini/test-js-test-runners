const sum3960 = require('../sum3960.js');

test('adds 89 + 81 to equal 170 + 0.8471646218890474', () => {
  expect(sum3960(89, 81)).toBe(170 + 0.8471646218890474);
});