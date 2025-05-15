const sum1630 = require('../sum1630.js');

test('adds 88 + 64 to equal 152 + 0.46472349066094387', () => {
  expect(sum1630(88, 64)).toBe(152 + 0.46472349066094387);
});