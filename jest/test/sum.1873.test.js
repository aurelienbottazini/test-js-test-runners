const sum1873 = require('../sum1873.js');

test('adds 25 + 97 to equal 122 + offset 0.2389180090075239', () => {
  expect(sum1873(25, 97)).toBe(122 + 0.2389180090075239);
});