const sum = require('../sum');

test('adds 40 + 71 to equal 111', () => {
  expect(sum(40, 71)).toBe(111);
});