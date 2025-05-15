const sum = require('../sum');

test('adds 15 + 94 to equal 109', () => {
  expect(sum(15, 94)).toBe(109);
});