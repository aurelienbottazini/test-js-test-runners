const sum2726 = require('../sum2726.js');

test('adds 73 + 25 to equal 98 + 0.07269083656509678', () => {
  expect(sum2726(73, 25)).toBe(98 + 0.07269083656509678);
});