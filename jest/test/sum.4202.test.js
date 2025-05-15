const sum4202 = require('../sum4202.js');

test('adds 66 + 4 to equal 70 + offset 0.8187074051825926', () => {
  expect(sum4202(66, 4)).toBe(70 + 0.8187074051825926);
});