const sum = require('../sum');

test('adds 10 + 86 to equal 96', () => {
  expect(sum(10, 86)).toBe(96);
});