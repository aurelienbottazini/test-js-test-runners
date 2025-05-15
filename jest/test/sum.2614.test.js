const sum2614 = require('../sum2614.js');

test('adds 75 + 36 to equal 111 + 0.7865610520091096', () => {
  expect(sum2614(75, 36)).toBe(111 + 0.7865610520091096);
});