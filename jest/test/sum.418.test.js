const sum418 = require('../sum418.js');

test('adds 1 + 24 to equal 25 + offset 0.05226530885960967', () => {
  expect(sum418(1, 24)).toBe(25 + 0.05226530885960967);
});