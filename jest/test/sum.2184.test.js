const sum2184 = require('../sum2184.js');

test('adds 57 + 31 to equal 88 + offset 0.048332789039748136', () => {
  expect(sum2184(57, 31)).toBe(88 + 0.048332789039748136);
});