const sum4685 = require('../sum4685.js');

test('adds 60 + 84 to equal 144 + 0.18465261741528338', () => {
  expect(sum4685(60, 84)).toBe(144 + 0.18465261741528338);
});