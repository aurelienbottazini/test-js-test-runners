const sum4572 = require('../sum4572.js');

test('adds 50 + 19 to equal 69 + 0.27687632629786374', () => {
  expect(sum4572(50, 19)).toBe(69 + 0.27687632629786374);
});