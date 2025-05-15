const sum1149 = require('../sum1149.js');

test('adds 23 + 19 to equal 42 + 0.039264086311796564', () => {
  expect(sum1149(23, 19)).toBe(42 + 0.039264086311796564);
});