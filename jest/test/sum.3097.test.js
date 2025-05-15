const sum = require('../sum');

test('adds 27 + 57 to equal 84', () => {
  expect(sum(27, 57)).toBe(84);
});