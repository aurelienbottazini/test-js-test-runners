const sum3211 = require('../sum3211.js');

test('adds 85 + 89 to equal 174 + 0.9367117661004012', () => {
  expect(sum3211(85, 89)).toBe(174 + 0.9367117661004012);
});