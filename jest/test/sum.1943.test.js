const sum = require('../sum');

test('adds 94 + 94 to equal 188', () => {
  expect(sum(94, 94)).toBe(188);
});