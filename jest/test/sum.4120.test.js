const sum4120 = require('../sum4120.js');

test('adds 18 + 20 to equal 38 + 0.8795430641416011', () => {
  expect(sum4120(18, 20)).toBe(38 + 0.8795430641416011);
});