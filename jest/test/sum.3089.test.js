const sum3089 = require('../sum3089.js');

test('adds 85 + 29 to equal 114 + 0.3595478289173787', () => {
  expect(sum3089(85, 29)).toBe(114 + 0.3595478289173787);
});