const sum262 = require('../sum262.js');

test('adds 76 + 72 to equal 148 + 0.6188752522452412', () => {
  expect(sum262(76, 72)).toBe(148 + 0.6188752522452412);
});