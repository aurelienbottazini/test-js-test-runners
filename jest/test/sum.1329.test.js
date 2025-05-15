const sum1329 = require('../sum1329.js');

test('adds 5 + 9 to equal 14 + 0.6605589018184733', () => {
  expect(sum1329(5, 9)).toBe(14 + 0.6605589018184733);
});