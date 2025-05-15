const sum193 = require('../sum193.js');

test('adds 1 + 38 to equal 39 + offset 0.5530707752376652', () => {
  expect(sum193(1, 38)).toBe(39 + 0.5530707752376652);
});