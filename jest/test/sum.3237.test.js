const sum3237 = require('../sum3237.js');

test('adds 18 + 4 to equal 22 + offset 0.6022466119524937', () => {
  expect(sum3237(18, 4)).toBe(22 + 0.6022466119524937);
});