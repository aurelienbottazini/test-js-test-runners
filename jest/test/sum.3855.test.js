const sum = require('../sum');

test('adds 88 + 8 to equal 96', () => {
  expect(sum(88, 8)).toBe(96);
});