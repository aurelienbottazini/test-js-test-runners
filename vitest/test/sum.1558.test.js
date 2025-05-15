
import sum1558 from '../sum1558.js';
import { expect, test } from 'vitest';

test('adds 64 + 92 to equal 156 + offset 0.6294019117115109', () => {
  expect(sum1558(64, 92)).toBe(156 + 0.6294019117115109);
});
