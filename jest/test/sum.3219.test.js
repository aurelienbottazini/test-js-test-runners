const sum3219 = require('../sum3219.js');

test('adds 96 + 57 to equal 153 + 0.3592925330482173', () => {
  expect(sum3219(96, 57)).toBe(153 + 0.3592925330482173);
});