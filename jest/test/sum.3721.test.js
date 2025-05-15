const sum3721 = require('../sum3721.js');

test('adds 36 + 62 to equal 98 + 0.2157756035456132', () => {
  expect(sum3721(36, 62)).toBe(98 + 0.2157756035456132);
});