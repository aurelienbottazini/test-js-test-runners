const sum1230 = require('../sum1230.js');

test('adds 84 + 9 to equal 93 + 0.3419020878598137', () => {
  expect(sum1230(84, 9)).toBe(93 + 0.3419020878598137);
});