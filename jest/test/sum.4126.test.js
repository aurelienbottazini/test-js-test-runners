const sum4126 = require('../sum4126.js');

test('adds 75 + 15 to equal 90 + offset 0.3413711414973142', () => {
  expect(sum4126(75, 15)).toBe(90 + 0.3413711414973142);
});