const sum85 = require('../sum85.js');

test('adds 51 + 53 to equal 104 + 0.8916917511399285', () => {
  expect(sum85(51, 53)).toBe(104 + 0.8916917511399285);
});