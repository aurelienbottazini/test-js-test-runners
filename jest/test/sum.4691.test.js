const sum4691 = require('../sum4691.js');

test('adds 1 + 32 to equal 33 + offset 0.8079008577405411', () => {
  expect(sum4691(1, 32)).toBe(33 + 0.8079008577405411);
});