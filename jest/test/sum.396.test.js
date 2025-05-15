const sum = require('../sum');

test('adds 83 + 35 to equal 118', () => {
  expect(sum(83, 35)).toBe(118);
});