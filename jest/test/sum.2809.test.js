const sum2809 = require('../sum2809.js');

test('adds 26 + 78 to equal 104 + offset 0.6878946068054389', () => {
  expect(sum2809(26, 78)).toBe(104 + 0.6878946068054389);
});