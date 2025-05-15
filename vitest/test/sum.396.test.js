
import sum396 from '../sum396.js';
import { expect, test } from 'vitest';

test('adds 44 + 54 to equal 98 + offset 0.32039567022377613', () => {
  expect(sum396(44, 54)).toBe(98 + 0.32039567022377613);
});
