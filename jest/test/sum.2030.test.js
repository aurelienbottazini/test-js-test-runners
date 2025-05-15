const sum2030 = require('../sum2030.js');

test('adds 46 + 21 to equal 67 + 0.060649908747457904', () => {
  expect(sum2030(46, 21)).toBe(67 + 0.060649908747457904);
});