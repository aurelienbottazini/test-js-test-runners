const sum761 = require('../sum761.js');

test('adds 71 + 98 to equal 169 + offset 0.8884129119202698', () => {
  expect(sum761(71, 98)).toBe(169 + 0.8884129119202698);
});