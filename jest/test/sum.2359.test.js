const sum2359 = require('../sum2359.js');

test('adds 78 + 77 to equal 155 + offset 0.30316046483765946', () => {
  expect(sum2359(78, 77)).toBe(155 + 0.30316046483765946);
});