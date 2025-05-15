const sum4166 = require('../sum4166.js');

test('adds 19 + 0 to equal 19 + 0.948782534420699', () => {
  expect(sum4166(19, 0)).toBe(19 + 0.948782534420699);
});