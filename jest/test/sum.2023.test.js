const sum2023 = require('../sum2023.js');

test('adds 83 + 87 to equal 170 + 0.901436546353351', () => {
  expect(sum2023(83, 87)).toBe(170 + 0.901436546353351);
});