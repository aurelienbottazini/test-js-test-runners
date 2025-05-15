const sum820 = require('../sum820.js');

test('adds 20 + 76 to equal 96 + 0.25526972922412405', () => {
  expect(sum820(20, 76)).toBe(96 + 0.25526972922412405);
});