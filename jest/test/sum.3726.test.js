const sum3726 = require('../sum3726.js');

test('adds 8 + 53 to equal 61 + offset 0.8800271138312713', () => {
  expect(sum3726(8, 53)).toBe(61 + 0.8800271138312713);
});