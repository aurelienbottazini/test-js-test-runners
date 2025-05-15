const sum1481 = require('../sum1481.js');

test('adds 82 + 82 to equal 164 + offset 0.3209159769587818', () => {
  expect(sum1481(82, 82)).toBe(164 + 0.3209159769587818);
});