const sum = require('../sum');

test('adds 67 + 44 to equal 111', () => {
  expect(sum(67, 44)).toBe(111);
});