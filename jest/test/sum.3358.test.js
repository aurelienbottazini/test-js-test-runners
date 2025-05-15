const sum3358 = require('../sum3358.js');

test('adds 26 + 15 to equal 41 + 0.831090301219971', () => {
  expect(sum3358(26, 15)).toBe(41 + 0.831090301219971);
});