const sum = require('../sum');

test('adds 39 + 70 to equal 109', () => {
  expect(sum(39, 70)).toBe(109);
});