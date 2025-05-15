const sum2055 = require('../sum2055.js');

test('adds 71 + 46 to equal 117 + 0.10176608900974671', () => {
  expect(sum2055(71, 46)).toBe(117 + 0.10176608900974671);
});