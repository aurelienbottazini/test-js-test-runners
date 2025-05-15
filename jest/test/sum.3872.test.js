const sum3872 = require('../sum3872.js');

test('adds 94 + 87 to equal 181 + 0.9808672557707482', () => {
  expect(sum3872(94, 87)).toBe(181 + 0.9808672557707482);
});