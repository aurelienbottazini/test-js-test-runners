const sum3391 = require('../sum3391.js');

test('adds 90 + 34 to equal 124 + offset 0.2503519055909883', () => {
  expect(sum3391(90, 34)).toBe(124 + 0.2503519055909883);
});