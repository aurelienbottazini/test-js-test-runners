const sum2309 = require('../sum2309.js');

test('adds 75 + 38 to equal 113 + 0.581619407680436', () => {
  expect(sum2309(75, 38)).toBe(113 + 0.581619407680436);
});