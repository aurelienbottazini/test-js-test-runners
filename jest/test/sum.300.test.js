const sum300 = require('../sum300.js');

test('adds 57 + 23 to equal 80 + offset 0.8874141322560432', () => {
  expect(sum300(57, 23)).toBe(80 + 0.8874141322560432);
});