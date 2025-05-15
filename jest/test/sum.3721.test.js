const sum3721 = require('../sum3721.js');

test('adds 99 + 12 to equal 111 + offset 0.4447711185208857', () => {
  expect(sum3721(99, 12)).toBe(111 + 0.4447711185208857);
});