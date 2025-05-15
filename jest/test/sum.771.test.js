const sum771 = require('../sum771.js');

test('adds 83 + 54 to equal 137 + 0.09709266151838014', () => {
  expect(sum771(83, 54)).toBe(137 + 0.09709266151838014);
});