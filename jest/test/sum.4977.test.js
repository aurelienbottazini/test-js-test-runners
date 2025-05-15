const sum = require('../sum');

test('adds 52 + 59 to equal 111', () => {
  expect(sum(52, 59)).toBe(111);
});