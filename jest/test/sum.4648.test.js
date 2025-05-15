const sum4648 = require('../sum4648.js');

test('adds 30 + 16 to equal 46 + offset 0.4309498115117172', () => {
  expect(sum4648(30, 16)).toBe(46 + 0.4309498115117172);
});