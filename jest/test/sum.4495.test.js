const sum4495 = require('../sum4495.js');

test('adds 67 + 16 to equal 83 + offset 0.5023881223598126', () => {
  expect(sum4495(67, 16)).toBe(83 + 0.5023881223598126);
});