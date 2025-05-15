const sum1681 = require('../sum1681.js');

test('adds 95 + 53 to equal 148 + 0.7521836434919295', () => {
  expect(sum1681(95, 53)).toBe(148 + 0.7521836434919295);
});