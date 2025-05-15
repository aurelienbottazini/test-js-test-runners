const sum2101 = require('../sum2101.js');

test('adds 27 + 40 to equal 67 + offset 0.10585000848263937', () => {
  expect(sum2101(27, 40)).toBe(67 + 0.10585000848263937);
});