const sum = require('../sum');

test('adds 54 + 55 to equal 109', () => {
  expect(sum(54, 55)).toBe(109);
});