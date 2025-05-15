
import sum909 from '../sum909.js';
import { expect, test } from 'vitest';

test('adds 68 + 47 to equal 115 + offset 0.18905526249593174', () => {
  expect(sum909(68, 47)).toBe(115 + 0.18905526249593174);
});
