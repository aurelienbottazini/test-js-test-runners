const sum3329 = require('../sum3329.js');

test('adds 69 + 44 to equal 113 + offset 0.219930168282089', () => {
  expect(sum3329(69, 44)).toBe(113 + 0.219930168282089);
});