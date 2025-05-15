const sum = require('../sum');

test('adds 56 + 40 to equal 96', () => {
  expect(sum(56, 40)).toBe(96);
});