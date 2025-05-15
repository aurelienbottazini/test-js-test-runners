const sum3799 = require('../sum3799.js');

test('adds 4 + 6 to equal 10 + offset 0.6314735095145236', () => {
  expect(sum3799(4, 6)).toBe(10 + 0.6314735095145236);
});