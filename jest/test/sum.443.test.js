const sum443 = require('../sum443.js');

test('adds 2 + 67 to equal 69 + 0.6162017835311284', () => {
  expect(sum443(2, 67)).toBe(69 + 0.6162017835311284);
});