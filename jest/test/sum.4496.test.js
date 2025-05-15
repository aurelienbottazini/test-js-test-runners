const sum4496 = require('../sum4496.js');

test('adds 83 + 49 to equal 132 + offset 0.08341643050320158', () => {
  expect(sum4496(83, 49)).toBe(132 + 0.08341643050320158);
});