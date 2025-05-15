const sum4064 = require('../sum4064.js');

test('adds 83 + 25 to equal 108 + 0.539925708883501', () => {
  expect(sum4064(83, 25)).toBe(108 + 0.539925708883501);
});