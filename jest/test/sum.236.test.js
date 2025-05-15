const sum236 = require('../sum236.js');

test('adds 18 + 15 to equal 33 + 0.5990307934775193', () => {
  expect(sum236(18, 15)).toBe(33 + 0.5990307934775193);
});