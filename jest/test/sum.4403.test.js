const sum4403 = require('../sum4403.js');

test('adds 15 + 94 to equal 109 + offset 0.23023735025871273', () => {
  expect(sum4403(15, 94)).toBe(109 + 0.23023735025871273);
});