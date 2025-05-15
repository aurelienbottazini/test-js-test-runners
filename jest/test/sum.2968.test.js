const sum = require('../sum');

test('adds 51 + 45 to equal 96', () => {
  expect(sum(51, 45)).toBe(96);
});