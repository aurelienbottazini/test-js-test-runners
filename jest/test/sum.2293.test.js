const sum2293 = require('../sum2293.js');

test('adds 9 + 46 to equal 55 + 0.29368962667909915', () => {
  expect(sum2293(9, 46)).toBe(55 + 0.29368962667909915);
});