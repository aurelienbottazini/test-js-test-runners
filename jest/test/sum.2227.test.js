const sum = require('../sum');

test('adds 78 + 33 to equal 111', () => {
  expect(sum(78, 33)).toBe(111);
});