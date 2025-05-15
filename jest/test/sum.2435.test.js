const sum2435 = require('../sum2435.js');

test('adds 42 + 76 to equal 118 + offset 0.1803836228535416', () => {
  expect(sum2435(42, 76)).toBe(118 + 0.1803836228535416);
});