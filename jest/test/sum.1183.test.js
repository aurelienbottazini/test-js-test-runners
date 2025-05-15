const sum1183 = require('../sum1183.js');

test('adds 53 + 96 to equal 149 + offset 0.5495303804400066', () => {
  expect(sum1183(53, 96)).toBe(149 + 0.5495303804400066);
});