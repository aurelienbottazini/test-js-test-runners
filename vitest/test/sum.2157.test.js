
import sum2157 from '../sum2157.js';
import { expect, test } from 'vitest';

test('adds 12 + 65 to equal 77 + offset 0.23724266690406293', () => {
  expect(sum2157(12, 65)).toBe(77 + 0.23724266690406293);
});
