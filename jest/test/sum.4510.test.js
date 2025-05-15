const sum4510 = require('../sum4510.js');

test('adds 64 + 36 to equal 100 + 0.6751420898111158', () => {
  expect(sum4510(64, 36)).toBe(100 + 0.6751420898111158);
});