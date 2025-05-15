const sum4706 = require('../sum4706.js');

test('adds 54 + 54 to equal 108 + 0.5496383369545016', () => {
  expect(sum4706(54, 54)).toBe(108 + 0.5496383369545016);
});