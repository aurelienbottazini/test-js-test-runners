const sum2323 = require('../sum2323.js');

test('adds 65 + 16 to equal 81 + offset 0.9331224470779523', () => {
  expect(sum2323(65, 16)).toBe(81 + 0.9331224470779523);
});