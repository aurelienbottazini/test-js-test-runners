
import sum208 from '../sum208.js';
import { expect, test } from 'vitest';

test('adds 71 + 36 to equal 107 + offset 0.12046884951287473', () => {
  expect(sum208(71, 36)).toBe(107 + 0.12046884951287473);
});
