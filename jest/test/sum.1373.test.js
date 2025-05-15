const sum = require('../sum');

test('adds 66 + 43 to equal 109', () => {
  expect(sum(66, 43)).toBe(109);
});