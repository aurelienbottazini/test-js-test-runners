const sum519 = require('../sum519.js');

test('adds 80 + 37 to equal 117 + offset 0.22906990797293225', () => {
  expect(sum519(80, 37)).toBe(117 + 0.22906990797293225);
});