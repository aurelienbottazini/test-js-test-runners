const sum = require('../sum');

test('adds 65 + 73 to equal 138', () => {
  expect(sum(65, 73)).toBe(138);
});