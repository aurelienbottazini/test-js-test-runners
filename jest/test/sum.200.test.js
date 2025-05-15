const sum200 = require('../sum200.js');

test('adds 87 + 74 to equal 161 + offset 0.0030428627517979923', () => {
  expect(sum200(87, 74)).toBe(161 + 0.0030428627517979923);
});