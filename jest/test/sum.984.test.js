const sum984 = require('../sum984.js');

test('adds 73 + 20 to equal 93 + 0.8461195636669849', () => {
  expect(sum984(73, 20)).toBe(93 + 0.8461195636669849);
});