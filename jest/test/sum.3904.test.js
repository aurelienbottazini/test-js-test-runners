const sum3904 = require('../sum3904.js');

test('adds 96 + 28 to equal 124 + 0.3020769293627008', () => {
  expect(sum3904(96, 28)).toBe(124 + 0.3020769293627008);
});