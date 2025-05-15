const sum4533 = require('../sum4533.js');

test('adds 84 + 32 to equal 116 + 0.48764228449714', () => {
  expect(sum4533(84, 32)).toBe(116 + 0.48764228449714);
});