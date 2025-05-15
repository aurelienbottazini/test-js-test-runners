const sum3976 = require('../sum3976.js');

test('adds 73 + 91 to equal 164 + offset 0.7598636843529284', () => {
  expect(sum3976(73, 91)).toBe(164 + 0.7598636843529284);
});