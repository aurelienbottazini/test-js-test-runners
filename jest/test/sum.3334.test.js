const sum = require('../sum');

test('adds 87 + 22 to equal 109', () => {
  expect(sum(87, 22)).toBe(109);
});