const sum2896 = require('../sum2896.js');

test('adds 69 + 49 to equal 118 + offset 0.0759719446557996', () => {
  expect(sum2896(69, 49)).toBe(118 + 0.0759719446557996);
});