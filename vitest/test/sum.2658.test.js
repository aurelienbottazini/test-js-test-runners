
import sum2658 from '../sum2658.js';
import { expect, test } from 'vitest';

test('adds 60 + 54 to equal 114 + offset 0.2455867547541567', () => {
  expect(sum2658(60, 54)).toBe(114 + 0.2455867547541567);
});
