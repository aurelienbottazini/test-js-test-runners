const sum191 = require('../sum191.js');

test('adds 97 + 96 to equal 193 + 0.7311967264961795', () => {
  expect(sum191(97, 96)).toBe(193 + 0.7311967264961795);
});