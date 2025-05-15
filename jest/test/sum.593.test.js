const sum593 = require('../sum593.js');

test('adds 50 + 29 to equal 79 + 0.001867149320117889', () => {
  expect(sum593(50, 29)).toBe(79 + 0.001867149320117889);
});