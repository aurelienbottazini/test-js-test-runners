const sum3154 = require('../sum3154.js');

test('adds 75 + 76 to equal 151 + offset 0.11164094418967752', () => {
  expect(sum3154(75, 76)).toBe(151 + 0.11164094418967752);
});