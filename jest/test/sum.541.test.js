const sum = require('../sum');

test('adds 11 + 85 to equal 96', () => {
  expect(sum(11, 85)).toBe(96);
});