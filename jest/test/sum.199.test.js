const sum = require('../sum');

test('adds 17 + 94 to equal 111', () => {
  expect(sum(17, 94)).toBe(111);
});