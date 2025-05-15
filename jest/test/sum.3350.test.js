const sum3350 = require('../sum3350.js');

test('adds 69 + 31 to equal 100 + offset 0.23830388355427945', () => {
  expect(sum3350(69, 31)).toBe(100 + 0.23830388355427945);
});