
import sum2042 from '../sum2042.js';
import { expect, test } from 'vitest';

test('adds 16 + 70 to equal 86 + offset 0.15363308481574356', () => {
  expect(sum2042(16, 70)).toBe(86 + 0.15363308481574356);
});
