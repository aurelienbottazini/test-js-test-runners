const sum804 = require('../sum804.js');

test('adds 58 + 4 to equal 62 + 0.006395889297909241', () => {
  expect(sum804(58, 4)).toBe(62 + 0.006395889297909241);
});