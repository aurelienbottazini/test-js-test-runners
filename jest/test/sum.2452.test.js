const sum = require('../sum');

test('adds 57 + 65 to equal 122', () => {
  expect(sum(57, 65)).toBe(122);
});