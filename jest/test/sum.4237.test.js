const sum4237 = require('../sum4237.js');

test('adds 79 + 9 to equal 88 + 0.7782851556633275', () => {
  expect(sum4237(79, 9)).toBe(88 + 0.7782851556633275);
});