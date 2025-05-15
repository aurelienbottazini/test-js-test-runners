const sum1284 = require('../sum1284.js');

test('adds 22 + 89 to equal 111 + offset 0.3091665000388397', () => {
  expect(sum1284(22, 89)).toBe(111 + 0.3091665000388397);
});