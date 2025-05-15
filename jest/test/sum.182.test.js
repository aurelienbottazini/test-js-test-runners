const sum182 = require('../sum182.js');

test('adds 40 + 26 to equal 66 + 0.13006127073798857', () => {
  expect(sum182(40, 26)).toBe(66 + 0.13006127073798857);
});