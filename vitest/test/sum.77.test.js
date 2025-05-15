
import sum77 from '../sum77.js';
import { expect, test } from 'vitest';

test('adds 38 + 30 to equal 68 + offset 0.13364980021273676', () => {
  expect(sum77(38, 30)).toBe(68 + 0.13364980021273676);
});
