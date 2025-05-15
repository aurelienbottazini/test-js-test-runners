const sum675 = require('../sum675.js');

test('adds 75 + 49 to equal 124 + 0.19671112924760403', () => {
  expect(sum675(75, 49)).toBe(124 + 0.19671112924760403);
});