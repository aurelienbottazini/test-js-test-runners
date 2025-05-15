const sum3224 = require('../sum3224.js');

test('adds 68 + 60 to equal 128 + 0.13804996437211992', () => {
  expect(sum3224(68, 60)).toBe(128 + 0.13804996437211992);
});