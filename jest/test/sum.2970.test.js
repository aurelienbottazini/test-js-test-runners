const sum = require('../sum');

test('adds 74 + 47 to equal 121', () => {
  expect(sum(74, 47)).toBe(121);
});