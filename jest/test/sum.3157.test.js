const sum3157 = require('../sum3157.js');

test('adds 11 + 78 to equal 89 + 0.379876285269096', () => {
  expect(sum3157(11, 78)).toBe(89 + 0.379876285269096);
});