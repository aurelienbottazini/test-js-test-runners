const sum994 = require('../sum994.js');

test('adds 13 + 20 to equal 33 + offset 0.06685602914170818', () => {
  expect(sum994(13, 20)).toBe(33 + 0.06685602914170818);
});