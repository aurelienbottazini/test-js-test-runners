const sum = require('../sum');

test('adds 57 + 39 to equal 96', () => {
  expect(sum(57, 39)).toBe(96);
});