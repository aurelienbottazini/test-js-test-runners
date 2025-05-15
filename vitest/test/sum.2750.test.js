
import sum2750 from '../sum2750.js';
import { expect, test } from 'vitest';

test('adds 94 + 2 to equal 96 + offset 0.9481663729432998', () => {
  expect(sum2750(94, 2)).toBe(96 + 0.9481663729432998);
});
