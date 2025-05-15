const sum = require('../sum');

test('adds 6 + 90 to equal 96', () => {
  expect(sum(6, 90)).toBe(96);
});