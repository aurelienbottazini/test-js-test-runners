const sum4000 = require('../sum4000.js');

test('adds 15 + 10 to equal 25 + 0.4816661221819023', () => {
  expect(sum4000(15, 10)).toBe(25 + 0.4816661221819023);
});