const sum2490 = require('../sum2490.js');

test('adds 19 + 23 to equal 42 + 0.0742274635844885', () => {
  expect(sum2490(19, 23)).toBe(42 + 0.0742274635844885);
});