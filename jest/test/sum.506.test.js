const sum506 = require('../sum506.js');

test('adds 40 + 85 to equal 125 + offset 0.02083524656670166', () => {
  expect(sum506(40, 85)).toBe(125 + 0.02083524656670166);
});