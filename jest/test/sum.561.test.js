const sum561 = require('../sum561.js');

test('adds 92 + 55 to equal 147 + offset 0.6926073808783401', () => {
  expect(sum561(92, 55)).toBe(147 + 0.6926073808783401);
});