const sum958 = require('../sum958.js');

test('adds 88 + 5 to equal 93 + offset 0.8266370593959976', () => {
  expect(sum958(88, 5)).toBe(93 + 0.8266370593959976);
});