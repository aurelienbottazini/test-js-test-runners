const sum = require('../sum');

test('adds 41 + 70 to equal 111', () => {
  expect(sum(41, 70)).toBe(111);
});