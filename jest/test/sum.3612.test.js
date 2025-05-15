const sum3612 = require('../sum3612.js');

test('adds 64 + 64 to equal 128 + 0.21743991504104554', () => {
  expect(sum3612(64, 64)).toBe(128 + 0.21743991504104554);
});