const sum359 = require('../sum359.js');

test('adds 79 + 68 to equal 147 + offset 0.022829710983139462', () => {
  expect(sum359(79, 68)).toBe(147 + 0.022829710983139462);
});