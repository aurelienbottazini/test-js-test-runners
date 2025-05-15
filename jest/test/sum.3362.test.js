const sum3362 = require('../sum3362.js');

test('adds 4 + 37 to equal 41 + 0.9797877890492535', () => {
  expect(sum3362(4, 37)).toBe(41 + 0.9797877890492535);
});