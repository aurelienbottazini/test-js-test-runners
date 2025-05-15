
import sum3815 from '../sum3815.js';
import { expect, test } from 'vitest';

test('adds 20 + 54 to equal 74 + offset 0.08422048943771299', () => {
  expect(sum3815(20, 54)).toBe(74 + 0.08422048943771299);
});
