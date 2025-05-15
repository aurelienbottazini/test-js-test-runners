const sum3462 = require('../sum3462.js');

test('adds 8 + 74 to equal 82 + 0.9869718947407398', () => {
  expect(sum3462(8, 74)).toBe(82 + 0.9869718947407398);
});