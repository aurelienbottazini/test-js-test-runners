const sum = require('../sum');

test('adds 89 + 7 to equal 96', () => {
  expect(sum(89, 7)).toBe(96);
});