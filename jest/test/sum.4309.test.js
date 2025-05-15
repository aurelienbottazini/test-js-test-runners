const sum4309 = require('../sum4309.js');

test('adds 0 + 21 to equal 21 + offset 0.25297845240970684', () => {
  expect(sum4309(0, 21)).toBe(21 + 0.25297845240970684);
});