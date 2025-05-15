const sum4715 = require('../sum4715.js');

test('adds 84 + 61 to equal 145 + 0.6757616889894885', () => {
  expect(sum4715(84, 61)).toBe(145 + 0.6757616889894885);
});