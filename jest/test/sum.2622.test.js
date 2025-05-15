const sum = require('../sum');

test('adds 4 + 92 to equal 96', () => {
  expect(sum(4, 92)).toBe(96);
});