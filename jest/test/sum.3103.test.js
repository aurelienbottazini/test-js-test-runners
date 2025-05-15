const sum3103 = require('../sum3103.js');

test('adds 67 + 5 to equal 72 + offset 0.5104751756406742', () => {
  expect(sum3103(67, 5)).toBe(72 + 0.5104751756406742);
});