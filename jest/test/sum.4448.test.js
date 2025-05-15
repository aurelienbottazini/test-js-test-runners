const sum4448 = require('../sum4448.js');

test('adds 53 + 30 to equal 83 + 0.11264656181698018', () => {
  expect(sum4448(53, 30)).toBe(83 + 0.11264656181698018);
});