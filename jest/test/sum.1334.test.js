const sum1334 = require('../sum1334.js');

test('adds 95 + 93 to equal 188 + offset 0.528485729078328', () => {
  expect(sum1334(95, 93)).toBe(188 + 0.528485729078328);
});