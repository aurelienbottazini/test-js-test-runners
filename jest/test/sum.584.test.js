const sum = require('../sum');

test('adds 38 + 73 to equal 111', () => {
  expect(sum(38, 73)).toBe(111);
});