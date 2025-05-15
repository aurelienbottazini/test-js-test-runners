const sum = require('../sum');

test('adds 74 + 22 to equal 96', () => {
  expect(sum(74, 22)).toBe(96);
});