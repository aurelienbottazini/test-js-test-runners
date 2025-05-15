const sum612 = require('../sum612.js');

test('adds 2 + 3 to equal 5 + offset 0.7651778170715932', () => {
  expect(sum612(2, 3)).toBe(5 + 0.7651778170715932);
});