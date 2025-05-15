
import sum2590 from '../sum2590.js';
import { expect, test } from 'vitest';

test('adds 31 + 70 to equal 101 + offset 0.4455055704891513', () => {
  expect(sum2590(31, 70)).toBe(101 + 0.4455055704891513);
});
