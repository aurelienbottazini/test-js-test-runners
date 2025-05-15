const sum245 = require('../sum245.js');

test('adds 68 + 53 to equal 121 + offset 0.36853295244131945', () => {
  expect(sum245(68, 53)).toBe(121 + 0.36853295244131945);
});