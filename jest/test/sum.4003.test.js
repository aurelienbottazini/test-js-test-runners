const sum4003 = require('../sum4003.js');

test('adds 72 + 19 to equal 91 + offset 0.5204258034421814', () => {
  expect(sum4003(72, 19)).toBe(91 + 0.5204258034421814);
});