const sum747 = require('../sum747.js');

test('adds 6 + 42 to equal 48 + offset 0.7034997716429064', () => {
  expect(sum747(6, 42)).toBe(48 + 0.7034997716429064);
});