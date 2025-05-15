const sum3564 = require('../sum3564.js');

test('adds 77 + 38 to equal 115 + offset 0.6692879264246628', () => {
  expect(sum3564(77, 38)).toBe(115 + 0.6692879264246628);
});