const sum = require('../sum');

test('adds 62 + 34 to equal 96', () => {
  expect(sum(62, 34)).toBe(96);
});