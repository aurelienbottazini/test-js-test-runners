const sum4472 = require('../sum4472.js');

test('adds 59 + 16 to equal 75 + offset 0.0343094716004656', () => {
  expect(sum4472(59, 16)).toBe(75 + 0.0343094716004656);
});