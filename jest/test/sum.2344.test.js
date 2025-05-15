const sum2344 = require('../sum2344.js');

test('adds 5 + 56 to equal 61 + offset 0.8331871382357141', () => {
  expect(sum2344(5, 56)).toBe(61 + 0.8331871382357141);
});