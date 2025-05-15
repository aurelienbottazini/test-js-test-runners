const sum = require('../sum');

test('adds 73 + 23 to equal 96', () => {
  expect(sum(73, 23)).toBe(96);
});