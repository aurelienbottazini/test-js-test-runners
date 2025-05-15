const sum608 = require('../sum608.js');

test('adds 28 + 88 to equal 116 + 0.5715556398616596', () => {
  expect(sum608(28, 88)).toBe(116 + 0.5715556398616596);
});