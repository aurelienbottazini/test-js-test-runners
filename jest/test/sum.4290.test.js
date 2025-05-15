const sum4290 = require('../sum4290.js');

test('adds 66 + 84 to equal 150 + offset 0.30369105905418003', () => {
  expect(sum4290(66, 84)).toBe(150 + 0.30369105905418003);
});