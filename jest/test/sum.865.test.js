const sum865 = require('../sum865.js');

test('adds 53 + 17 to equal 70 + offset 0.8695828297656217', () => {
  expect(sum865(53, 17)).toBe(70 + 0.8695828297656217);
});