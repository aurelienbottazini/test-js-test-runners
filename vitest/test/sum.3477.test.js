
import sum3477 from '../sum3477.js';
import { expect, test } from 'vitest';

test('adds 84 + 29 to equal 113 + offset 0.9415268171402605', () => {
  expect(sum3477(84, 29)).toBe(113 + 0.9415268171402605);
});
