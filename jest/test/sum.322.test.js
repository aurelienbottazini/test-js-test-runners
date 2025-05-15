const sum322 = require('../sum322.js');

test('adds 17 + 67 to equal 84 + offset 0.680351160043337', () => {
  expect(sum322(17, 67)).toBe(84 + 0.680351160043337);
});