const sum4207 = require('../sum4207.js');

test('adds 44 + 41 to equal 85 + offset 0.6990902021443283', () => {
  expect(sum4207(44, 41)).toBe(85 + 0.6990902021443283);
});