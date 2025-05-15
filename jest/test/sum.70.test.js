const sum70 = require('../sum70.js');

test('adds 89 + 76 to equal 165 + offset 0.48940388626879716', () => {
  expect(sum70(89, 76)).toBe(165 + 0.48940388626879716);
});