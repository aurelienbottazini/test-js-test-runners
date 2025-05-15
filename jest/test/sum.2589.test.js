const sum2589 = require('../sum2589.js');

test('adds 65 + 5 to equal 70 + 0.42781445755539205', () => {
  expect(sum2589(65, 5)).toBe(70 + 0.42781445755539205);
});