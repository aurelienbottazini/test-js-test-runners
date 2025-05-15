const sum52 = require('../sum52.js');

test('adds 67 + 61 to equal 128 + offset 0.6416705347723402', () => {
  expect(sum52(67, 61)).toBe(128 + 0.6416705347723402);
});