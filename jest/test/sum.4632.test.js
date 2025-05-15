const sum4632 = require('../sum4632.js');

test('adds 33 + 78 to equal 111 + 0.4746268857824577', () => {
  expect(sum4632(33, 78)).toBe(111 + 0.4746268857824577);
});