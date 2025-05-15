const sum3727 = require('../sum3727.js');

test('adds 62 + 10 to equal 72 + 0.38878868263910893', () => {
  expect(sum3727(62, 10)).toBe(72 + 0.38878868263910893);
});