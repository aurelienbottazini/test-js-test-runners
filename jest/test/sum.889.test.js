const sum889 = require('../sum889.js');

test('adds 33 + 96 to equal 129 + 0.903052481721435', () => {
  expect(sum889(33, 96)).toBe(129 + 0.903052481721435);
});