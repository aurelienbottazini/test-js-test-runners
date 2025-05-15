const sum2003 = require('../sum2003.js');

test('adds 30 + 6 to equal 36 + 0.5156631295067668', () => {
  expect(sum2003(30, 6)).toBe(36 + 0.5156631295067668);
});