const sum3462 = require('../sum3462.js');

test('adds 57 + 29 to equal 86 + offset 0.23548113064198029', () => {
  expect(sum3462(57, 29)).toBe(86 + 0.23548113064198029);
});