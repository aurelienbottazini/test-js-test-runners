const sum2593 = require('../sum2593.js');

test('adds 16 + 33 to equal 49 + offset 0.639260752538185', () => {
  expect(sum2593(16, 33)).toBe(49 + 0.639260752538185);
});