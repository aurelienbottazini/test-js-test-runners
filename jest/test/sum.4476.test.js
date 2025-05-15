const sum4476 = require('../sum4476.js');

test('adds 87 + 24 to equal 111 + 0.1576679698962714', () => {
  expect(sum4476(87, 24)).toBe(111 + 0.1576679698962714);
});