const sum3906 = require('../sum3906.js');

test('adds 65 + 44 to equal 109 + offset 0.7325356518574879', () => {
  expect(sum3906(65, 44)).toBe(109 + 0.7325356518574879);
});