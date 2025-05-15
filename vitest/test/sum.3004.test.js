
import sum3004 from '../sum3004.js';
import { expect, test } from 'vitest';

test('adds 45 + 78 to equal 123 + offset 0.6156925146660917', () => {
  expect(sum3004(45, 78)).toBe(123 + 0.6156925146660917);
});
