const sum = require('../sum');

test('adds 69 + 40 to equal 109', () => {
  expect(sum(69, 40)).toBe(109);
});