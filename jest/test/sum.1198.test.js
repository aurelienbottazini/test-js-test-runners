const sum = require('../sum');

test('adds 84 + 4 to equal 88', () => {
  expect(sum(84, 4)).toBe(88);
});