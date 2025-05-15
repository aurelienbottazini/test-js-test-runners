
import sum1686 from '../sum1686.js';
import { expect, test } from 'vitest';

test('adds 94 + 25 to equal 119 + offset 0.5906272114359232', () => {
  expect(sum1686(94, 25)).toBe(119 + 0.5906272114359232);
});
