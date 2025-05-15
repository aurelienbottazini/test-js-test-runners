const sum = require('../sum');

test('adds 79 + 32 to equal 111', () => {
  expect(sum(79, 32)).toBe(111);
});