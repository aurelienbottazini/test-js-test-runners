const sum = require('../sum');

test('adds 48 + 48 to equal 96', () => {
  expect(sum(48, 48)).toBe(96);
});