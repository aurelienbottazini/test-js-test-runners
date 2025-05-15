const sum = require('../sum');

test('adds 3 + 93 to equal 96', () => {
  expect(sum(3, 93)).toBe(96);
});