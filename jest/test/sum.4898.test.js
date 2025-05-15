const sum4898 = require('../sum4898.js');

test('adds 78 + 27 to equal 105 + 0.4035104404301565', () => {
  expect(sum4898(78, 27)).toBe(105 + 0.4035104404301565);
});