const sum = require('../sum');

test('adds 33 + 35 to equal 68', () => {
  expect(sum(33, 35)).toBe(68);
});