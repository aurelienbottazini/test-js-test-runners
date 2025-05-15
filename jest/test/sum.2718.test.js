const sum2718 = require('../sum2718.js');

test('adds 74 + 82 to equal 156 + 0.6904769972392146', () => {
  expect(sum2718(74, 82)).toBe(156 + 0.6904769972392146);
});