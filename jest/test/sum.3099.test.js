const sum3099 = require('../sum3099.js');

test('adds 78 + 5 to equal 83 + offset 0.15348206637738648', () => {
  expect(sum3099(78, 5)).toBe(83 + 0.15348206637738648);
});