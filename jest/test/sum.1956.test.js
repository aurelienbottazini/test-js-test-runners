const sum1956 = require('../sum1956.js');

test('adds 2 + 47 to equal 49 + 0.4549982585465303', () => {
  expect(sum1956(2, 47)).toBe(49 + 0.4549982585465303);
});