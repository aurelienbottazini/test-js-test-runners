
import sum98 from '../sum98.js';
import { expect, test } from 'vitest';

test('adds 63 + 94 to equal 157 + offset 0.29690057315539276', () => {
  expect(sum98(63, 94)).toBe(157 + 0.29690057315539276);
});
