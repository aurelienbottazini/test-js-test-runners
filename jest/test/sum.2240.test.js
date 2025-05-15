const sum2240 = require('../sum2240.js');

test('adds 72 + 34 to equal 106 + offset 0.2544258442531424', () => {
  expect(sum2240(72, 34)).toBe(106 + 0.2544258442531424);
});