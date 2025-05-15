
import sum2486 from '../sum2486.js';
import { expect, test } from 'vitest';

test('adds 15 + 31 to equal 46 + offset 0.13198343237151133', () => {
  expect(sum2486(15, 31)).toBe(46 + 0.13198343237151133);
});
