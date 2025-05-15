const sum21 = require('../sum21.js');

test('adds 19 + 91 to equal 110 + 0.9728516018523143', () => {
  expect(sum21(19, 91)).toBe(110 + 0.9728516018523143);
});