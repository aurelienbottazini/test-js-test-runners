const sum767 = require('../sum767.js');

test('adds 60 + 11 to equal 71 + 0.3510159090238868', () => {
  expect(sum767(60, 11)).toBe(71 + 0.3510159090238868);
});