const sum4952 = require('../sum4952.js');

test('adds 74 + 4 to equal 78 + offset 0.7806023890181354', () => {
  expect(sum4952(74, 4)).toBe(78 + 0.7806023890181354);
});