const sum1346 = require('../sum1346.js');

test('adds 65 + 25 to equal 90 + 0.29162224233623757', () => {
  expect(sum1346(65, 25)).toBe(90 + 0.29162224233623757);
});