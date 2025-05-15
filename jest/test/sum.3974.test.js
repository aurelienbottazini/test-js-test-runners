const sum3974 = require('../sum3974.js');

test('adds 96 + 32 to equal 128 + 0.19410879433561234', () => {
  expect(sum3974(96, 32)).toBe(128 + 0.19410879433561234);
});