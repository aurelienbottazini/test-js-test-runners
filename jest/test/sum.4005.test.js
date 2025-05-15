const sum4005 = require('../sum4005.js');

test('adds 18 + 95 to equal 113 + offset 0.5739684448796162', () => {
  expect(sum4005(18, 95)).toBe(113 + 0.5739684448796162);
});