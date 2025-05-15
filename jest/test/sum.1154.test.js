const sum1154 = require('../sum1154.js');

test('adds 33 + 61 to equal 94 + offset 0.46354910605485666', () => {
  expect(sum1154(33, 61)).toBe(94 + 0.46354910605485666);
});