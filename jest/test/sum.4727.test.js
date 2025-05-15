const sum4727 = require('../sum4727.js');

test('adds 19 + 47 to equal 66 + offset 0.6803363446872217', () => {
  expect(sum4727(19, 47)).toBe(66 + 0.6803363446872217);
});