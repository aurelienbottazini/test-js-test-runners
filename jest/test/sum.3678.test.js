const sum = require('../sum');

test('adds 45 + 66 to equal 111', () => {
  expect(sum(45, 66)).toBe(111);
});