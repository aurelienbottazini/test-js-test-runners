const sum559 = require('../sum559.js');

test('adds 26 + 95 to equal 121 + offset 0.8266714088069188', () => {
  expect(sum559(26, 95)).toBe(121 + 0.8266714088069188);
});