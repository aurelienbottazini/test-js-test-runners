const sum = require('../sum');

test('adds 25 + 71 to equal 96', () => {
  expect(sum(25, 71)).toBe(96);
});