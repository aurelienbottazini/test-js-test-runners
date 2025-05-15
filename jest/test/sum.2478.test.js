const sum = require('../sum');

test('adds 33 + 63 to equal 96', () => {
  expect(sum(33, 63)).toBe(96);
});