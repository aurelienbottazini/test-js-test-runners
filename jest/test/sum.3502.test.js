const sum = require('../sum');

test('adds 88 + 33 to equal 121', () => {
  expect(sum(88, 33)).toBe(121);
});