const sum190 = require('../sum190.js');

test('adds 62 + 36 to equal 98 + offset 0.3213963122376008', () => {
  expect(sum190(62, 36)).toBe(98 + 0.3213963122376008);
});