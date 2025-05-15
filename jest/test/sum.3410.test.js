const sum3410 = require('../sum3410.js');

test('adds 21 + 72 to equal 93 + 0.9302536697000201', () => {
  expect(sum3410(21, 72)).toBe(93 + 0.9302536697000201);
});