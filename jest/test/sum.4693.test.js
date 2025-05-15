const sum4693 = require('../sum4693.js');

test('adds 33 + 92 to equal 125 + 0.013536852060348381', () => {
  expect(sum4693(33, 92)).toBe(125 + 0.013536852060348381);
});