const sum = require('../sum');

test('adds 78 + 31 to equal 109', () => {
  expect(sum(78, 31)).toBe(109);
});