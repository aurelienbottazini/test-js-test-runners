const sum179 = require('../sum179.js');

test('adds 68 + 7 to equal 75 + 0.013882487970085955', () => {
  expect(sum179(68, 7)).toBe(75 + 0.013882487970085955);
});