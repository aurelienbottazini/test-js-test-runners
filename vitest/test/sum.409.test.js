
import sum409 from '../sum409.js';
import { expect, test } from 'vitest';

test('adds 37 + 88 to equal 125 + offset 0.021895112597731026', () => {
  expect(sum409(37, 88)).toBe(125 + 0.021895112597731026);
});
