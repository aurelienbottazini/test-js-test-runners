const sum3331 = require('../sum3331.js');

test('adds 9 + 17 to equal 26 + 0.2529991248133522', () => {
  expect(sum3331(9, 17)).toBe(26 + 0.2529991248133522);
});