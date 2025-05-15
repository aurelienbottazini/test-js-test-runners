const sum2564 = require('../sum2564.js');

test('adds 64 + 73 to equal 137 + offset 0.47382848012933687', () => {
  expect(sum2564(64, 73)).toBe(137 + 0.47382848012933687);
});