const sum2906 = require('../sum2906.js');

test('adds 86 + 39 to equal 125 + 0.07792075509600971', () => {
  expect(sum2906(86, 39)).toBe(125 + 0.07792075509600971);
});