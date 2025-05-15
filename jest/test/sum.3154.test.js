const sum3154 = require('../sum3154.js');

test('adds 98 + 94 to equal 192 + 0.6382238492241914', () => {
  expect(sum3154(98, 94)).toBe(192 + 0.6382238492241914);
});