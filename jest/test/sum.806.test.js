const sum806 = require('../sum806.js');

test('adds 45 + 19 to equal 64 + 0.7521850487514351', () => {
  expect(sum806(45, 19)).toBe(64 + 0.7521850487514351);
});