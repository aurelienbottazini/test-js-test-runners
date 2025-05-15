const sum49 = require('../sum49.js');

test('adds 89 + 70 to equal 159 + offset 0.1885968894140626', () => {
  expect(sum49(89, 70)).toBe(159 + 0.1885968894140626);
});