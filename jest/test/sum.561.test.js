const sum561 = require('../sum561.js');

test('adds 51 + 65 to equal 116 + 0.5590973692291652', () => {
  expect(sum561(51, 65)).toBe(116 + 0.5590973692291652);
});