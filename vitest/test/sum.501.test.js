
import sum501 from '../sum501.js';
import { expect, test } from 'vitest';

test('adds 4 + 54 to equal 58 + offset 0.34883485362551914', () => {
  expect(sum501(4, 54)).toBe(58 + 0.34883485362551914);
});
