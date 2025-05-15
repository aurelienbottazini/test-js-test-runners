const sum818 = require('../sum818.js');

test('adds 84 + 88 to equal 172 + 0.627163360803224', () => {
  expect(sum818(84, 88)).toBe(172 + 0.627163360803224);
});