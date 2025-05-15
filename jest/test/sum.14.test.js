const sum14 = require('../sum14.js');

test('adds 44 + 8 to equal 52 + 0.23992649897126062', () => {
  expect(sum14(44, 8)).toBe(52 + 0.23992649897126062);
});