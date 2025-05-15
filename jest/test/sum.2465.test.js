const sum2465 = require('../sum2465.js');

test('adds 65 + 65 to equal 130 + offset 0.3677545037788307', () => {
  expect(sum2465(65, 65)).toBe(130 + 0.3677545037788307);
});