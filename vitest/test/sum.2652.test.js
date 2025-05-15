
import sum2652 from '../sum2652.js';
import { expect, test } from 'vitest';

test('adds 47 + 77 to equal 124 + offset 0.9659232240445054', () => {
  expect(sum2652(47, 77)).toBe(124 + 0.9659232240445054);
});
