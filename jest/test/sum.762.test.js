const sum762 = require('../sum762.js');

test('adds 25 + 66 to equal 91 + offset 0.39994055708429177', () => {
  expect(sum762(25, 66)).toBe(91 + 0.39994055708429177);
});