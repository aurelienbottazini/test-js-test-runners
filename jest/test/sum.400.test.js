const sum400 = require('../sum400.js');

test('adds 17 + 73 to equal 90 + 0.018507191314404703', () => {
  expect(sum400(17, 73)).toBe(90 + 0.018507191314404703);
});