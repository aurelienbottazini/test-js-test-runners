const sum = require('../sum');

test('adds 35 + 61 to equal 96', () => {
  expect(sum(35, 61)).toBe(96);
});