const sum = require('../sum');

test('adds 83 + 39 to equal 122', () => {
  expect(sum(83, 39)).toBe(122);
});