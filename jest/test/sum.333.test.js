const sum333 = require('../sum333.js');

test('adds 89 + 72 to equal 161 + offset 0.9252065050997662', () => {
  expect(sum333(89, 72)).toBe(161 + 0.9252065050997662);
});