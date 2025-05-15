const sum4921 = require('../sum4921.js');

test('adds 55 + 61 to equal 116 + offset 0.14051415877515072', () => {
  expect(sum4921(55, 61)).toBe(116 + 0.14051415877515072);
});