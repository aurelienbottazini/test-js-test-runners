const sum118 = require('../sum118.js');

test('adds 55 + 61 to equal 116 + offset 0.4109193647568625', () => {
  expect(sum118(55, 61)).toBe(116 + 0.4109193647568625);
});