
import sum1170 from '../sum1170.js';
import { expect, test } from 'vitest';

test('adds 91 + 78 to equal 169 + offset 0.6881052944190473', () => {
  expect(sum1170(91, 78)).toBe(169 + 0.6881052944190473);
});
