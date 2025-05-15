const sum = require('../sum');

test('adds 90 + 6 to equal 96', () => {
  expect(sum(90, 6)).toBe(96);
});