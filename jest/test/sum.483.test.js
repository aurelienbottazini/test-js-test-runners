const sum483 = require('../sum483.js');

test('adds 9 + 91 to equal 100 + offset 0.15416310510842535', () => {
  expect(sum483(9, 91)).toBe(100 + 0.15416310510842535);
});