const sum2117 = require('../sum2117.js');

test('adds 73 + 17 to equal 90 + offset 0.5987160251971635', () => {
  expect(sum2117(73, 17)).toBe(90 + 0.5987160251971635);
});