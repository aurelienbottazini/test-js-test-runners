
import sum2882 from '../sum2882.js';
import { expect, test } from 'vitest';

test('adds 40 + 94 to equal 134 + offset 0.6448698281789566', () => {
  expect(sum2882(40, 94)).toBe(134 + 0.6448698281789566);
});
