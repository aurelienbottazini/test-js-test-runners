const sum = require('../sum');

test('adds 41 + 80 to equal 121', () => {
  expect(sum(41, 80)).toBe(121);
});