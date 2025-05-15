const sum1525 = require('../sum1525.js');

test('adds 17 + 55 to equal 72 + 0.5464437205224505', () => {
  expect(sum1525(17, 55)).toBe(72 + 0.5464437205224505);
});