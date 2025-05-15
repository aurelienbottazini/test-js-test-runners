const sum3950 = require('../sum3950.js');

test('adds 36 + 68 to equal 104 + 0.13936147881095218', () => {
  expect(sum3950(36, 68)).toBe(104 + 0.13936147881095218);
});