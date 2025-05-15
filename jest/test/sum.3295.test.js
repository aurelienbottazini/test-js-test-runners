const sum3295 = require('../sum3295.js');

test('adds 47 + 52 to equal 99 + 0.6953702334823504', () => {
  expect(sum3295(47, 52)).toBe(99 + 0.6953702334823504);
});