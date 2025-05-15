const sum3896 = require('../sum3896.js');

test('adds 64 + 3 to equal 67 + 0.20078714186886581', () => {
  expect(sum3896(64, 3)).toBe(67 + 0.20078714186886581);
});