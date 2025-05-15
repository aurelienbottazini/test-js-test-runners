const sum4400 = require('../sum4400.js');

test('adds 60 + 43 to equal 103 + offset 0.12659499568185217', () => {
  expect(sum4400(60, 43)).toBe(103 + 0.12659499568185217);
});