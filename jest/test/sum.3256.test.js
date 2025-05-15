const sum = require('../sum');

test('adds 83 + 13 to equal 96', () => {
  expect(sum(83, 13)).toBe(96);
});