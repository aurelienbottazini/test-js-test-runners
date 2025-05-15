const sum2476 = require('../sum2476.js');

test('adds 19 + 9 to equal 28 + offset 0.9905259418741483', () => {
  expect(sum2476(19, 9)).toBe(28 + 0.9905259418741483);
});