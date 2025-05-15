const sum684 = require('../sum684.js');

test('adds 34 + 8 to equal 42 + offset 0.46696903784486454', () => {
  expect(sum684(34, 8)).toBe(42 + 0.46696903784486454);
});