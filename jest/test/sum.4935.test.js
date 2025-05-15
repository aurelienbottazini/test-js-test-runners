const sum4935 = require('../sum4935.js');

test('adds 56 + 48 to equal 104 + 0.5052977108270628', () => {
  expect(sum4935(56, 48)).toBe(104 + 0.5052977108270628);
});