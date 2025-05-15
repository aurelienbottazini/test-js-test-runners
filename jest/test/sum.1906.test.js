const sum1906 = require('../sum1906.js');

test('adds 37 + 69 to equal 106 + 0.5007543938643025', () => {
  expect(sum1906(37, 69)).toBe(106 + 0.5007543938643025);
});