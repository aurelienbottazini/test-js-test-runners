
import sum1808 from '../sum1808.js';
import { expect, test } from 'vitest';

test('adds 54 + 7 to equal 61 + offset 0.04973227671414271', () => {
  expect(sum1808(54, 7)).toBe(61 + 0.04973227671414271);
});
