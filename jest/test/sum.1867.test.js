const sum1867 = require('../sum1867.js');

test('adds 64 + 52 to equal 116 + 0.25440733283008', () => {
  expect(sum1867(64, 52)).toBe(116 + 0.25440733283008);
});