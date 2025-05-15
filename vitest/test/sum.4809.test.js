
import sum4809 from '../sum4809.js';
import { expect, test } from 'vitest';

test('adds 86 + 90 to equal 176 + offset 0.5975901699729179', () => {
  expect(sum4809(86, 90)).toBe(176 + 0.5975901699729179);
});
