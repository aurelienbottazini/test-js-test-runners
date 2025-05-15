const sum2120 = require('../sum2120.js');

test('adds 34 + 88 to equal 122 + offset 0.3976957590452497', () => {
  expect(sum2120(34, 88)).toBe(122 + 0.3976957590452497);
});