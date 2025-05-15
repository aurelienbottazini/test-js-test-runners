const sum2096 = require('../sum2096.js');

test('adds 82 + 8 to equal 90 + 0.16324101961062965', () => {
  expect(sum2096(82, 8)).toBe(90 + 0.16324101961062965);
});