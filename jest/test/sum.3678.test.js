const sum3678 = require('../sum3678.js');

test('adds 42 + 57 to equal 99 + 0.5286070697875369', () => {
  expect(sum3678(42, 57)).toBe(99 + 0.5286070697875369);
});