const sum2144 = require('../sum2144.js');

test('adds 48 + 79 to equal 127 + offset 0.8635750324263478', () => {
  expect(sum2144(48, 79)).toBe(127 + 0.8635750324263478);
});