const sum435 = require('../sum435.js');

test('adds 82 + 3 to equal 85 + 0.935324457221066', () => {
  expect(sum435(82, 3)).toBe(85 + 0.935324457221066);
});