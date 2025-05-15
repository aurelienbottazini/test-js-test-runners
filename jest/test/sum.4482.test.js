const sum4482 = require('../sum4482.js');

test('adds 4 + 4 to equal 8 + offset 0.4799945939196437', () => {
  expect(sum4482(4, 4)).toBe(8 + 0.4799945939196437);
});