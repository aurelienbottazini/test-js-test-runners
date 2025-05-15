const sum3380 = require('../sum3380.js');

test('adds 84 + 64 to equal 148 + 0.4799598474494077', () => {
  expect(sum3380(84, 64)).toBe(148 + 0.4799598474494077);
});