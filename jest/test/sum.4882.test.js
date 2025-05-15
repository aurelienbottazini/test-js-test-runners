const sum = require('../sum');

test('adds 15 + 97 to equal 112', () => {
  expect(sum(15, 97)).toBe(112);
});