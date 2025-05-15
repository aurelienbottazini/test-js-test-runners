const sum492 = require('../sum492.js');

test('adds 64 + 91 to equal 155 + 0.7192379196448817', () => {
  expect(sum492(64, 91)).toBe(155 + 0.7192379196448817);
});