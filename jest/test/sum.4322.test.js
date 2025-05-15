const sum4322 = require('../sum4322.js');

test('adds 92 + 94 to equal 186 + offset 0.6692450890583166', () => {
  expect(sum4322(92, 94)).toBe(186 + 0.6692450890583166);
});