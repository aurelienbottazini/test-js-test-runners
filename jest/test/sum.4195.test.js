const sum4195 = require('../sum4195.js');

test('adds 91 + 64 to equal 155 + 0.6866869778778347', () => {
  expect(sum4195(91, 64)).toBe(155 + 0.6866869778778347);
});