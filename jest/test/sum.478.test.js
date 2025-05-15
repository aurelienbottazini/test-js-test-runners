const sum478 = require('../sum478.js');

test('adds 70 + 6 to equal 76 + 0.7526293274340893', () => {
  expect(sum478(70, 6)).toBe(76 + 0.7526293274340893);
});