const sum = require('../sum');

test('adds 91 + 5 to equal 96', () => {
  expect(sum(91, 5)).toBe(96);
});