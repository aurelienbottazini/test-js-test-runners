const sum = require('../sum');

test('adds 26 + 83 to equal 109', () => {
  expect(sum(26, 83)).toBe(109);
});