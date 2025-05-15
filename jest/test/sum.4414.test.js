const sum4414 = require('../sum4414.js');

test('adds 0 + 40 to equal 40 + offset 0.8783690358665833', () => {
  expect(sum4414(0, 40)).toBe(40 + 0.8783690358665833);
});