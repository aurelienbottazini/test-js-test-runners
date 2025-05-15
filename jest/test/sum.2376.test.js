const sum2376 = require('../sum2376.js');

test('adds 69 + 22 to equal 91 + offset 0.997104342689257', () => {
  expect(sum2376(69, 22)).toBe(91 + 0.997104342689257);
});