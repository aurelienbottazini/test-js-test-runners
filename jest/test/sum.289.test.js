const sum289 = require('../sum289.js');

test('adds 60 + 51 to equal 111 + offset 0.8409089815087046', () => {
  expect(sum289(60, 51)).toBe(111 + 0.8409089815087046);
});