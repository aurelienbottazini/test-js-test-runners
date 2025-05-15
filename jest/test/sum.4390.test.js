const sum4390 = require('../sum4390.js');

test('adds 42 + 76 to equal 118 + 0.22038180411752162', () => {
  expect(sum4390(42, 76)).toBe(118 + 0.22038180411752162);
});