const sum = require('../sum');

test('adds 41 + 68 to equal 109', () => {
  expect(sum(41, 68)).toBe(109);
});