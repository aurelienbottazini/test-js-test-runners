const sum4309 = require('../sum4309.js');

test('adds 52 + 5 to equal 57 + 0.6572998081169594', () => {
  expect(sum4309(52, 5)).toBe(57 + 0.6572998081169594);
});