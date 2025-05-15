
import sum2376 from '../sum2376.js';
import { expect, test } from 'vitest';

test('adds 43 + 71 to equal 114 + offset 0.20673703541551014', () => {
  expect(sum2376(43, 71)).toBe(114 + 0.20673703541551014);
});
