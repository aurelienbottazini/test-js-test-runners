const sum2845 = require('../sum2845.js');

test('adds 53 + 65 to equal 118 + offset 0.8628337318708172', () => {
  expect(sum2845(53, 65)).toBe(118 + 0.8628337318708172);
});