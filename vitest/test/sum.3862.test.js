
import sum3862 from '../sum3862.js';
import { expect, test } from 'vitest';

test('adds 68 + 30 to equal 98 + offset 0.34404596499421936', () => {
  expect(sum3862(68, 30)).toBe(98 + 0.34404596499421936);
});
