const sum2983 = require('../sum2983.js');

test('adds 14 + 91 to equal 105 + 0.11116228429849029', () => {
  expect(sum2983(14, 91)).toBe(105 + 0.11116228429849029);
});