const sum1666 = require('../sum1666.js');

test('adds 52 + 4 to equal 56 + 0.772651229712238', () => {
  expect(sum1666(52, 4)).toBe(56 + 0.772651229712238);
});