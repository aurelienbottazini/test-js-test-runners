const sum168 = require('../sum168.js');

test('adds 93 + 50 to equal 143 + 0.8398969949176545', () => {
  expect(sum168(93, 50)).toBe(143 + 0.8398969949176545);
});