const sum2870 = require('../sum2870.js');

test('adds 68 + 64 to equal 132 + offset 0.050547245019044396', () => {
  expect(sum2870(68, 64)).toBe(132 + 0.050547245019044396);
});