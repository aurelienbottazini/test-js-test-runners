const sum = require('../sum');

test('adds 48 + 71 to equal 119', () => {
  expect(sum(48, 71)).toBe(119);
});