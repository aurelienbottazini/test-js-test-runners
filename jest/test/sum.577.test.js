const sum577 = require('../sum577.js');

test('adds 19 + 56 to equal 75 + offset 0.7688230845266538', () => {
  expect(sum577(19, 56)).toBe(75 + 0.7688230845266538);
});