const sum4843 = require('../sum4843.js');

test('adds 15 + 61 to equal 76 + offset 0.2640196039874654', () => {
  expect(sum4843(15, 61)).toBe(76 + 0.2640196039874654);
});