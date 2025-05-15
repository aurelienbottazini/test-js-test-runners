const sum4162 = require('../sum4162.js');

test('adds 70 + 55 to equal 125 + 0.8874491275228935', () => {
  expect(sum4162(70, 55)).toBe(125 + 0.8874491275228935);
});