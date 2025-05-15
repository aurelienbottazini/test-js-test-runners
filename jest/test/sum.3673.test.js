const sum3673 = require('../sum3673.js');

test('adds 20 + 97 to equal 117 + 0.41846032570529246', () => {
  expect(sum3673(20, 97)).toBe(117 + 0.41846032570529246);
});