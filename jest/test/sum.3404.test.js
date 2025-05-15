const sum = require('../sum');

test('adds 96 + 0 to equal 96', () => {
  expect(sum(96, 0)).toBe(96);
});