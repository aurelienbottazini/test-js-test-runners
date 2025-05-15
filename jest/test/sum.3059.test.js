const sum3059 = require('../sum3059.js');

test('adds 30 + 41 to equal 71 + 0.2278446089838172', () => {
  expect(sum3059(30, 41)).toBe(71 + 0.2278446089838172);
});