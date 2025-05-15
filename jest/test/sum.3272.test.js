const sum3272 = require('../sum3272.js');

test('adds 46 + 2 to equal 48 + offset 0.7454360495057106', () => {
  expect(sum3272(46, 2)).toBe(48 + 0.7454360495057106);
});