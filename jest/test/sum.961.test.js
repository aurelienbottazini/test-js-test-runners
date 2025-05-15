const sum961 = require('../sum961.js');

test('adds 65 + 39 to equal 104 + 0.9779988773609063', () => {
  expect(sum961(65, 39)).toBe(104 + 0.9779988773609063);
});