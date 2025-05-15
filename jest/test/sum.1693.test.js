const sum1693 = require('../sum1693.js');

test('adds 74 + 47 to equal 121 + 0.747486886043483', () => {
  expect(sum1693(74, 47)).toBe(121 + 0.747486886043483);
});