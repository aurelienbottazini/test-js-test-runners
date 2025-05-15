const sum616 = require('../sum616.js');

test('adds 82 + 82 to equal 164 + offset 0.9438028263716439', () => {
  expect(sum616(82, 82)).toBe(164 + 0.9438028263716439);
});