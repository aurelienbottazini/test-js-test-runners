const sum223 = require('../sum223.js');

test('adds 27 + 98 to equal 125 + 0.03841205734858788', () => {
  expect(sum223(27, 98)).toBe(125 + 0.03841205734858788);
});