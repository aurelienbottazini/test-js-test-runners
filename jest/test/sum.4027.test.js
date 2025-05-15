const sum4027 = require('../sum4027.js');

test('adds 95 + 84 to equal 179 + 0.8777476298526665', () => {
  expect(sum4027(95, 84)).toBe(179 + 0.8777476298526665);
});