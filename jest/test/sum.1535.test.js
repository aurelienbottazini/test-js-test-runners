const sum1535 = require('../sum1535.js');

test('adds 69 + 75 to equal 144 + 0.8749817221765989', () => {
  expect(sum1535(69, 75)).toBe(144 + 0.8749817221765989);
});