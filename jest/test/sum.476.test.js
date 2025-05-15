const sum476 = require('../sum476.js');

test('adds 75 + 51 to equal 126 + offset 0.6757100740304497', () => {
  expect(sum476(75, 51)).toBe(126 + 0.6757100740304497);
});