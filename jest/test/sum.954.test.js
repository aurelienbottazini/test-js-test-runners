const sum954 = require('../sum954.js');

test('adds 64 + 88 to equal 152 + offset 0.21347539947551664', () => {
  expect(sum954(64, 88)).toBe(152 + 0.21347539947551664);
});