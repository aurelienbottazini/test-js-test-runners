const sum3103 = require('../sum3103.js');

test('adds 66 + 10 to equal 76 + 0.006029211811674262', () => {
  expect(sum3103(66, 10)).toBe(76 + 0.006029211811674262);
});