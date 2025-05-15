const sum73 = require('../sum73.js');

test('adds 75 + 58 to equal 133 + offset 0.7069642406829233', () => {
  expect(sum73(75, 58)).toBe(133 + 0.7069642406829233);
});