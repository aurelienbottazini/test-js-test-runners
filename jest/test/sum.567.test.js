const sum567 = require('../sum567.js');

test('adds 26 + 55 to equal 81 + 0.9214331063235939', () => {
  expect(sum567(26, 55)).toBe(81 + 0.9214331063235939);
});