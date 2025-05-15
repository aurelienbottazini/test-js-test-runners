
import sum4508 from '../sum4508.js';
import { expect, test } from 'vitest';

test('adds 94 + 62 to equal 156 + offset 0.1704587071516247', () => {
  expect(sum4508(94, 62)).toBe(156 + 0.1704587071516247);
});
