const sum3174 = require('../sum3174.js');

test('adds 60 + 15 to equal 75 + offset 0.8736006526688604', () => {
  expect(sum3174(60, 15)).toBe(75 + 0.8736006526688604);
});