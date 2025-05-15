const sum4689 = require('../sum4689.js');

test('adds 22 + 80 to equal 102 + offset 0.6106299650175407', () => {
  expect(sum4689(22, 80)).toBe(102 + 0.6106299650175407);
});