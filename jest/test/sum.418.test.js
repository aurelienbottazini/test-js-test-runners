const sum = require('../sum');

test('adds 56 + 57 to equal 113', () => {
  expect(sum(56, 57)).toBe(113);
});