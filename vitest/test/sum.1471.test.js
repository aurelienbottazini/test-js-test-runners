
import sum1471 from '../sum1471.js';
import { expect, test } from 'vitest';

test('adds 74 + 77 to equal 151 + offset 0.7285569618386105', () => {
  expect(sum1471(74, 77)).toBe(151 + 0.7285569618386105);
});
