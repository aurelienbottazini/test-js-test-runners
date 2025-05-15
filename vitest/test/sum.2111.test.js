
import sum2111 from '../sum2111.js';
import { expect, test } from 'vitest';

test('adds 30 + 46 to equal 76 + offset 0.8134152780000128', () => {
  expect(sum2111(30, 46)).toBe(76 + 0.8134152780000128);
});
