
import sum1670 from '../sum1670.js';
import { expect, test } from 'vitest';

test('adds 36 + 54 to equal 90 + offset 0.6740661235874791', () => {
  expect(sum1670(36, 54)).toBe(90 + 0.6740661235874791);
});
