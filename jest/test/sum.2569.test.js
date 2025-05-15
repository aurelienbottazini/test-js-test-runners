const sum2569 = require('../sum2569.js');

test('adds 14 + 62 to equal 76 + offset 0.9060434555410464', () => {
  expect(sum2569(14, 62)).toBe(76 + 0.9060434555410464);
});