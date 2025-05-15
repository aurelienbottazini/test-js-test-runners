const sum3027 = require('../sum3027.js');

test('adds 83 + 79 to equal 162 + 0.6352021387885514', () => {
  expect(sum3027(83, 79)).toBe(162 + 0.6352021387885514);
});