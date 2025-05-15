const sum2580 = require('../sum2580.js');

test('adds 72 + 37 to equal 109 + offset 0.42800148787579706', () => {
  expect(sum2580(72, 37)).toBe(109 + 0.42800148787579706);
});