const sum1825 = require('../sum1825.js');

test('adds 90 + 31 to equal 121 + offset 0.3659445023440978', () => {
  expect(sum1825(90, 31)).toBe(121 + 0.3659445023440978);
});