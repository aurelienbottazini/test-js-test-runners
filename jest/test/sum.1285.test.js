const sum1285 = require('../sum1285.js');

test('adds 59 + 20 to equal 79 + 0.2240346203464656', () => {
  expect(sum1285(59, 20)).toBe(79 + 0.2240346203464656);
});