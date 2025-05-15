const sum4984 = require('../sum4984.js');

test('adds 90 + 48 to equal 138 + 0.16547843781929028', () => {
  expect(sum4984(90, 48)).toBe(138 + 0.16547843781929028);
});