const sum4940 = require('../sum4940.js');

test('adds 25 + 16 to equal 41 + 0.7542280750494958', () => {
  expect(sum4940(25, 16)).toBe(41 + 0.7542280750494958);
});