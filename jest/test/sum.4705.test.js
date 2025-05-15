const sum4705 = require('../sum4705.js');

test('adds 68 + 1 to equal 69 + 0.028922756433980457', () => {
  expect(sum4705(68, 1)).toBe(69 + 0.028922756433980457);
});