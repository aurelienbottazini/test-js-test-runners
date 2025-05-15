const sum4550 = require('../sum4550.js');

test('adds 23 + 76 to equal 99 + 0.3093927759900109', () => {
  expect(sum4550(23, 76)).toBe(99 + 0.3093927759900109);
});