const sum2807 = require('../sum2807.js');

test('adds 0 + 40 to equal 40 + offset 0.12596836974156578', () => {
  expect(sum2807(0, 40)).toBe(40 + 0.12596836974156578);
});