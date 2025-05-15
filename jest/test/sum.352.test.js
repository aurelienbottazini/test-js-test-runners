const sum352 = require('../sum352.js');

test('adds 49 + 73 to equal 122 + offset 0.851217282585165', () => {
  expect(sum352(49, 73)).toBe(122 + 0.851217282585165);
});