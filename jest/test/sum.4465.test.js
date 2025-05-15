const sum4465 = require('../sum4465.js');

test('adds 28 + 63 to equal 91 + offset 0.41934901543115655', () => {
  expect(sum4465(28, 63)).toBe(91 + 0.41934901543115655);
});