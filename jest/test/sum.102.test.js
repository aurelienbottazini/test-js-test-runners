const sum = require('../sum');

test('adds 75 + 71 to equal 146', () => {
  expect(sum(75, 71)).toBe(146);
});