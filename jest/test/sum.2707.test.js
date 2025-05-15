const sum = require('../sum');

test('adds 41 + 47 to equal 88', () => {
  expect(sum(41, 47)).toBe(88);
});