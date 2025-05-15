const sum3768 = require('../sum3768.js');

test('adds 56 + 1 to equal 57 + offset 0.4837387724345653', () => {
  expect(sum3768(56, 1)).toBe(57 + 0.4837387724345653);
});