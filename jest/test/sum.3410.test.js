const sum3410 = require('../sum3410.js');

test('adds 65 + 57 to equal 122 + offset 0.9088170315598776', () => {
  expect(sum3410(65, 57)).toBe(122 + 0.9088170315598776);
});