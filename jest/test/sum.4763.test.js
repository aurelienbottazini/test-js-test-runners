const sum4763 = require('../sum4763.js');

test('adds 26 + 29 to equal 55 + 0.3941312346843645', () => {
  expect(sum4763(26, 29)).toBe(55 + 0.3941312346843645);
});