const sum231 = require('../sum231.js');

test('adds 64 + 15 to equal 79 + offset 0.8519901453441102', () => {
  expect(sum231(64, 15)).toBe(79 + 0.8519901453441102);
});