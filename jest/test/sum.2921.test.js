const sum2921 = require('../sum2921.js');

test('adds 71 + 47 to equal 118 + offset 0.2321832133301892', () => {
  expect(sum2921(71, 47)).toBe(118 + 0.2321832133301892);
});