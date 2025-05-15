const sum2368 = require('../sum2368.js');

test('adds 9 + 91 to equal 100 + offset 0.6328142121220017', () => {
  expect(sum2368(9, 91)).toBe(100 + 0.6328142121220017);
});