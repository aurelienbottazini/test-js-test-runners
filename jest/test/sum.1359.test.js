const sum1359 = require('../sum1359.js');

test('adds 54 + 49 to equal 103 + 0.24631342983742766', () => {
  expect(sum1359(54, 49)).toBe(103 + 0.24631342983742766);
});