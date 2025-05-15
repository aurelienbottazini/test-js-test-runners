const sum = require('../sum');

test('adds 88 + 93 to equal 181', () => {
  expect(sum(88, 93)).toBe(181);
});