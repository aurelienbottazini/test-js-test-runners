const sum = require('../sum');

test('adds 91 + 20 to equal 111', () => {
  expect(sum(91, 20)).toBe(111);
});