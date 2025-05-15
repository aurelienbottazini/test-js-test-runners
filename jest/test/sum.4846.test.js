const sum = require('../sum');

test('adds 11 + 98 to equal 109', () => {
  expect(sum(11, 98)).toBe(109);
});