const sum1394 = require('../sum1394.js');

test('adds 81 + 47 to equal 128 + 0.4986979700971831', () => {
  expect(sum1394(81, 47)).toBe(128 + 0.4986979700971831);
});