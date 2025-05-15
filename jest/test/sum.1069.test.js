const sum = require('../sum');

test('adds 93 + 3 to equal 96', () => {
  expect(sum(93, 3)).toBe(96);
});