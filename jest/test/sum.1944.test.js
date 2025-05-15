const sum1944 = require('../sum1944.js');

test('adds 23 + 80 to equal 103 + offset 0.11262678033635076', () => {
  expect(sum1944(23, 80)).toBe(103 + 0.11262678033635076);
});