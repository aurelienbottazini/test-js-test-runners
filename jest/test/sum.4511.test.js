const sum4511 = require('../sum4511.js');

test('adds 21 + 52 to equal 73 + 0.5376948391988088', () => {
  expect(sum4511(21, 52)).toBe(73 + 0.5376948391988088);
});