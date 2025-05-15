const sum2724 = require('../sum2724.js');

test('adds 64 + 32 to equal 96 + offset 0.8895926573153589', () => {
  expect(sum2724(64, 32)).toBe(96 + 0.8895926573153589);
});