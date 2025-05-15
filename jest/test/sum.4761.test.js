const sum4761 = require('../sum4761.js');

test('adds 6 + 8 to equal 14 + offset 0.06845617686903238', () => {
  expect(sum4761(6, 8)).toBe(14 + 0.06845617686903238);
});