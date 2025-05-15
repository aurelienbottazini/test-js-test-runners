const sum4288 = require('../sum4288.js');

test('adds 72 + 8 to equal 80 + 0.3238790022438579', () => {
  expect(sum4288(72, 8)).toBe(80 + 0.3238790022438579);
});