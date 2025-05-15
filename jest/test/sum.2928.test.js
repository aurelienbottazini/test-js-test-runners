const sum2928 = require('../sum2928.js');

test('adds 12 + 81 to equal 93 + 0.446133224354885', () => {
  expect(sum2928(12, 81)).toBe(93 + 0.446133224354885);
});