const sum1164 = require('../sum1164.js');

test('adds 48 + 82 to equal 130 + offset 0.9440019544834273', () => {
  expect(sum1164(48, 82)).toBe(130 + 0.9440019544834273);
});