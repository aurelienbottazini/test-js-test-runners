const sum3852 = require('../sum3852.js');

test('adds 96 + 74 to equal 170 + 0.7118159475470235', () => {
  expect(sum3852(96, 74)).toBe(170 + 0.7118159475470235);
});