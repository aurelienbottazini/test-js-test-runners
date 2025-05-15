const sum865 = require('../sum865.js');

test('adds 39 + 15 to equal 54 + 0.4324352907423805', () => {
  expect(sum865(39, 15)).toBe(54 + 0.4324352907423805);
});