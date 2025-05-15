const sum393 = require('../sum393.js');

test('adds 88 + 99 to equal 187 + 0.29277197518137577', () => {
  expect(sum393(88, 99)).toBe(187 + 0.29277197518137577);
});