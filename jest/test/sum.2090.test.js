const sum = require('../sum');

test('adds 22 + 87 to equal 109', () => {
  expect(sum(22, 87)).toBe(109);
});