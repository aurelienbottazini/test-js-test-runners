const sum3887 = require('../sum3887.js');

test('adds 23 + 52 to equal 75 + offset 0.06514914994388632', () => {
  expect(sum3887(23, 52)).toBe(75 + 0.06514914994388632);
});