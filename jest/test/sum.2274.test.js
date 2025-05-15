const sum = require('../sum');

test('adds 15 + 96 to equal 111', () => {
  expect(sum(15, 96)).toBe(111);
});