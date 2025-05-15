const sum2665 = require('../sum2665.js');

test('adds 60 + 67 to equal 127 + offset 0.17928375005009145', () => {
  expect(sum2665(60, 67)).toBe(127 + 0.17928375005009145);
});