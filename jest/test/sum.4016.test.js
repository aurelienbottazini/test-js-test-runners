const sum = require('../sum');

test('adds 30 + 66 to equal 96', () => {
  expect(sum(30, 66)).toBe(96);
});